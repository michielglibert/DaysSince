import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

const getEventsWithName = async () => {
  const users = await prisma?.event.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return users;
};

export type PersonsWithName = Prisma.PromiseReturnType<
  typeof getEventsWithName
>;

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(await getEventsWithName());
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: "ERROR", error });
  }
};

export default handler;
