import { prisma } from "../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";

const getPersonsWithName = async () => {
  const users = await prisma?.person.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return users;
};

export type PersonsWithName = Prisma.PromiseReturnType<
  typeof getPersonsWithName
>;

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(await getPersonsWithName());
  } catch (error) {
    console.error(error);
    res.status(400).json({ status: "ERROR", error });
  }
};

export default handler;
