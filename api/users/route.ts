import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

// GET all users
export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('your_database_name'); // Replace with your DB name
        const users = await db.collection('users').find().toArray();

        return NextResponse.json(users);
    } catch (error) {
        console.error('GET users error:', error);
        return new NextResponse('Failed to fetch users', { status: 500 });
    }
}

// POST to create a new user manually (optional, for admin use maybe)
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { clerkId, email, firstName, lastName, image } = body;

        if (!email || !clerkId) {
            return new NextResponse('Missing required fields', { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('your_database_name');

        const result = await db.collection('users').insertOne({
            clerkId,
            email,
            firstName,
            lastName,
            image,
            createdAt: new Date(),
        });

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error('POST user error:', error);
        return new NextResponse('Failed to create user', { status: 500 });
    }
}
