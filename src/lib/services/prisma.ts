import { PrismaClient, Prisma } from "@/generated/client";

declare global {
  // eslint-disable-next-line
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient();

// eslint-disable-next-line
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export const PrismaTypes = Prisma;
