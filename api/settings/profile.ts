// pages/api/settings/profile.ts
import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise;
    const db = client.db();

    if (req.method === "PUT") {
        const result = await db.collection("users").updateOne(
            { email: req.body.email },
            { $set: req.body },
            { upsert: true }
        );
        res.json(result);
    }
}
