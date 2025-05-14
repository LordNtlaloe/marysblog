// pages/api/messages/[id].ts
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise;
    const db = client.db();
    const { id } = req.query;

    if (req.method === "PUT") {
        const result = await db.collection("messages").updateOne(
            { _id: new ObjectId(id as string) },
            { $set: req.body }
        );
        res.json(result);
    }

    if (req.method === "DELETE") {
        const result = await db.collection("messages").deleteOne({
            _id: new ObjectId(id as string),
        });
        res.json(result);
    }
}
