import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

interface StatusResponse {
  status: "OK" | "ERROR";
  error?: unknown;
}

export const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<StatusResponse>
) => {
  const { name } = req.body;

  try {
    await prisma?.person.create({
      data: {
        name,
      },
    });

    res.status(200).json({ status: "OK" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: "ERROR", error });
  }
};

export default handler;
