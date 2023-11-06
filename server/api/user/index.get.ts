import { usePrisma } from "~/server/services/prisma";

export default defineEventHandler(async (event) => {
  const prisma = usePrisma();
  const users = await prisma.user.findMany();

  return users;
});
