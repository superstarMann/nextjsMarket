import { client } from "@/libs/server/client";
import withHandler from "@/libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

 async function handler(
    req:NextApiRequest, 
    res:NextApiResponse
) {
    return res.status(200).end();
}

export default withHandler("POST", handler);