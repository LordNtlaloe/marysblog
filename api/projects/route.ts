// pages/api/projects/index.ts
import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise;
    const db = client.db();

    if (req.method === "GET") {
        const projects = await db.collection("projects").find({}).toArray();
        res.json(projects);
    }

    if (req.method === "POST") {
        const result = await db.collection("projects").insertOne(req.body);
        res.status(201).json(result);
    }
}
