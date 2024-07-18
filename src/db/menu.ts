import { prisma } from "@/lib/services/prisma";

export async function getAllMenus() {
  try {
    return prisma.menu.findMany({
      where: {
        deletedAt: null,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching menus");
  }
}

export async function getAllMenusWithRestaurant() {
  try {
    return prisma.menu.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        restaurant: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching menus with restaurants");
  }
}

export async function getAllMenusWithRestaurantAndLabel() {
  try {
    return prisma.menu.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        restaurant: true,
        label: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while fetching menus with restaurants and labels"
    );
  }
}

export async function getAllMenusWithRestaurantAndLabelAndAllergenics() {
  try {
    return prisma.menu.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        restaurant: true,
        label: true,
        allergenics: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while fetching menus with restaurants, labels, and allergenics"
    );
  }
}

export async function getAllMenusWithAllergenics() {
  try {
    return prisma.menu.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        allergenics: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching menus with allergenics");
  }
}

export async function getMenuById(id: number) {
  try {
    return prisma.menu.findUnique({ where: { id, deletedAt: null } });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching menu with id: " + id);
  }
}

export async function getMenuByName(name: string) {
  try {
    return prisma.menu.findMany({
      where: {
        AND: [
          {
            name: {
              contains: name,
              mode: "insensitive",
            },
          },
          {
            deletedAt: null,
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while fetching menu with name: " + name);
  }
}

export async function getMenuByNameWithAllergenics(name: string) {
  try {
    return prisma.menu.findMany({
      where: {
        AND: [
          {
            name: {
              contains: name,
              mode: "insensitive",
            },
          },
          {
            deletedAt: null,
          },
        ],
      },
      include: {
        allergenics: true,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while fetching menu with name and allergenics: " + name
    );
  }
}

/**
 *
 * @param restaurantName used to search for a menu by restaurant name
 * @returns if found, returns all menus that match the restaurant name and are available. Otherwise, returns an empty array.
 *
 * @throws if an error occurs while fetching the menu
 *
 * @example
 * ```typescript
 * // Example usage:
 * getMenuByRestaurantName(McDonalds)
 * ```
 *
 * ```json
 * // Example return value:
 * [
 *  {
 *   "id": 1,
 *   "createdAt": "2021-09-29T00:00:00.000Z",
 *   "updatedAt": "2021-09-29T00:00:00.000Z",
 *   "name": "Big Mac",
 *   "price": 599,
 *   "description": "Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
 *   "dateAvailable": "2021-09-29T00:00:00.000Z",
 *   "restaurantId": 1,
 *   "labelId": 1,
 *   "tags": [
 *     "beef",
 *     "lettuce",
 *     "cheese",
 *   ],
 *   "daysAvailableFromDate": 3,
 *   }
 * ]
 * ```
 */
export async function getMenuByRestaurantName(restaurantName: string) {
  const now = new Date();
  try {
    return prisma.menu.findMany({
      where: {
        AND: [
          {
            restaurant: {
              name: {
                contains: restaurantName,
                mode: "insensitive",
              },
            },
          },
          {
            dateAvailable: {
              gte: now,
            },
          },
          {
            deletedAt: null,
          },
        ],
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error(
      "An error occurred while fetching menu with restaurant name: " +
        restaurantName
    );
  }
}

export async function createMenu() {
  return "creates a menu";
}
