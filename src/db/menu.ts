import { prisma } from "@/lib/services/prisma";

export async function getAllMenus() {
  return prisma.menu.findMany();
}

export async function getMenuById(id: string) {
  return prisma.menu.findUnique({ where: { id } });
}

export async function getMenuByName(name: string) {
  return prisma.menu.findUnique({ where: { name } });
}

export async function getMenuByRestaurantName(restaurantName: string) {
  return prisma.menu.findMany({
    where: {
      restaurant: {
        name: restaurantName,
      },
    },
  });
}
