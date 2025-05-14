import { WebhookEvent } from '@clerk/nextjs/server';
import { headers } from 'next/headers';
import { Webhook } from 'svix';
import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';

async function validateRequest(request: Request) {
    const payloadString = await request.text();
    const headerPayload = await headers();

    const svixHeaders = {
        'svix-id': headerPayload.get('svix-id')!,
        'svix-timestamp': headerPayload.get('svix-timestamp')!,
        'svix-signature': headerPayload.get('svix-signature')!,
    };

    const wh = new Webhook(webhookSecret);
    return wh.verify(payloadString, svixHeaders) as WebhookEvent;
}

export async function POST(request: Request) {
    const payload = await validateRequest(request);

    if (payload.type === 'user.created') {
        const { id, email_addresses, first_name, last_name, image_url} = payload.data;

        try {
            const client = await clientPromise;
            const db = client.db('your_database_name'); // ⬅️ Change to your DB name

            await db.collection('users').insertOne({
                clerkId: id,
                email: email_addresses?.[0]?.email_address || '',
                firstName: first_name,
                lastName: last_name,
                image: image_url,
                createdAt: new Date(),
                role: "Member"
            });

            console.log('✅ User created in DB');
        } catch (error) {
            console.error('❌ Failed to create user:', error);
            return new NextResponse('Failed to create user', { status: 500 });
        }
    }

    return NextResponse.json({ message: 'Webhook received' });
}
