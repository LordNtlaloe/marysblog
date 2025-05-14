import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('your_database_name');
        const posts = await db.collection('posts').find().toArray();

        return NextResponse.json(posts);
    } catch (error) {
        console.error('GET error:', error);
        return new NextResponse('Failed to fetch posts', { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, category, date } = body;

        const client = await clientPromise;
        const db = client.db('your_database_name');
        const result = await db.collection('posts').insertOne({ title, category, date });

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        console.error('POST error:', error);
        return new NextResponse('Failed to create post', { status: 500 });
    }
}
