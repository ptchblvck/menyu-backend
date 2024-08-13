import { prisma } from "@/lib/services/prisma";
import { RestaurantObjectType } from "@/lib/types/restaurant";

export function getAllRestaurants() {
  try {
    return prisma.restaurant.findMany({});
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching restaurants");
  }
}

export function getRestaurantByName(name: string) {
  try {
    return prisma.restaurant.findUnique({
      where: {
        name,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching restaurant by name");
  }
}

export function getRestaurantById(id: number) {
  try {
    return prisma.restaurant.findUnique({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching restaurant by id");
  }
}

export function getRestaurantsWithGivenMenu(menu: string) {
  try {
    return prisma.restaurant.findMany({
      where: {
        menus: {
          some: {
            name: menu,
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching restaurants with menu");
  }
}

export function getRestaurantsWithMenus() {
  try {
    return prisma.restaurant.findMany({
      include: {
        menus: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching restaurants with menus");
  }
}

export function createRestaurant({
  name,
  address,
  phone,
  zip,
  hours,
  city,
  country,
  address2 = null,
  address3 = null,
  address4 = null,
}: RestaurantObjectType) {
  try {
    return prisma.restaurant.create({
      data: {
        name,
        address,
        address2,
        address3,
        address4,
        phone,
        hours,
        zip,
        city,
        country,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while creating restaurant");
  }
}
