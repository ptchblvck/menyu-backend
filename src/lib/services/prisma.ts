import { PrismaClient, Prisma } from "@/generated/client";

declare global {
  // eslint-disable-next-line
  var prisma: PrismaClient | undefined;
}

// omitting deletedAt field from all models
export const prisma =
  global.prisma ||
  new PrismaClient({
    omit: {
      allergenics: {
        deletedAt: true,
      },
      menu: {
        deletedAt: true,
      },
      restaurant: {
        deletedAt: true,
      },
      user: {
        deletedAt: true,
      },
      label: {
        deletedAt: true,
      },
      like: {
        deletedAt: true,
      },
      favorite: {
        deletedAt: true,
      },
    },
  });

// eslint-disable-next-line
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export const PrismaTypes = Prisma;
