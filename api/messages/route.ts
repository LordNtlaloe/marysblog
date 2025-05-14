// pages/api/messages/index.ts
import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise;
    const db = client.db();

    if (req.method === "GET") {
        const messages = await db.collection("messages").find({}).toArray();
        res.json(messages);
    }

    if (req.method === "POST") {
        const newMessage = req.body;
        const result = await db.collection("messages").insertOne(newMessage);
        res.status(201).json(result);
    }
}
