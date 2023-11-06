import { PrismaClient } from "@prisma/client";

export const usePrisma = () => {
  try {
    return new PrismaClient();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create Prisma Client");
  }
};
