import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        const client = await clientPromise;
        const db = client.db('your_database_name');
        const post = await db.collection('posts').findOne({ _id: new ObjectId(params.id) });

        if (!post) return new NextResponse('Post not found', { status: 404 });

        return NextResponse.json(post);
    } catch (error) {
        console.error('GET /[id] error:', error);
        return new NextResponse('Failed to fetch post', { status: 500 });
    }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    try {
        const body = await req.json();
        const { title, category, date } = body;

        const client = await clientPromise;
        const db = client.db('your_database_name');
        const result = await db.collection('posts').updateOne(
            { _id: new ObjectId(params.id) },
            { $set: { title, category, date } }
        );

        return NextResponse.json(result);
    } catch (error) {
        console.error('PATCH /[id] error:', error);
        return new NextResponse('Failed to update post', { status: 500 });
    }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
    try {
        const client = await clientPromise;
        const db = client.db('your_database_name');
        const result = await db.collection('posts').deleteOne({ _id: new ObjectId(params.id) });

        return NextResponse.json(result);
    } catch (error) {
        console.error('DELETE /[id] error:', error);
        return new NextResponse('Failed to delete post', { status: 500 });
    }
}
