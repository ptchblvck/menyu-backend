const { PrismaClient } = require("../src/generated/client");
const prisma = new PrismaClient();

console.log("Seeding the database... 🌱");

async function main() {
  try {
    // Create Users
    const user1 = await prisma.user.create({
      data: {
        email: "john.doe@example.com",
        name: "John Doe",
      },
    });

    const user2 = await prisma.user.create({
      data: {
        email: "jane.smith@example.com",
        name: "Jane Smith",
      },
    });

    // Create Restaurants
    const restaurant1 = await prisma.restaurant.create({
      data: {
        name: "The Great Restaurant",
        address: "123 Flavor Street",
        city: "Tastytown",
        state: "FL",
        zip: "12345",
        hours: "9 AM - 9 PM",
        phone: "+123456789",
        email: "contact@greatrestaurant.com",
        website: "https://greatrestaurant.com",
        menus: {
          create: [
            {
              name: "Spaghetti Carbonara",
              price: 1500,
              description: "Classic Italian pasta dish",
              image: "https://example.com/carbonara.jpg",
              label: "OMNIVORE",
              dateAvailable: new Date(),
              tags: ["Italian", "Pasta"],
            },
            {
              name: "Margherita Pizza",
              price: 1200,
              description: "Fresh pizza with tomatoes and basil",
              image: "https://example.com/pizza.jpg",
              label: "VEGETARIAN",
              dateAvailable: new Date(),
              tags: ["Italian", "Pizza"],
            },
          ],
        },
      },
      include: {
        menus: true,
      },
    });

    const restaurant2 = await prisma.restaurant.create({
      data: {
        name: "Food Haven",
        address: "456 Gourmet Avenue",
        city: "Deliciocity",
        state: "CA",
        zip: "67890",
        hours: "10 AM - 10 PM",
        phone: "+987654321",
        email: "hello@foodhaven.com",
        website: "https://foodhaven.com",
        menus: {
          create: [
            {
              name: "Sushi Platter",
              price: 2000,
              description: "Assorted sushi platter",
              image: "https://example.com/sushi.jpg",
              label: "OMNIVORE",
              dateAvailable: new Date(),
              tags: ["Japanese", "Sushi"],
            },
            {
              name: "Ramen Bowl",
              price: 1300,
              description: "Hearty ramen bowl",
              image: "https://example.com/ramen.jpg",
              label: "OMNIVORE",
              dateAvailable: new Date(),
              tags: ["Japanese", "Ramen"],
            },
          ],
        },
      },
      include: {
        menus: true,
      },
    });

    // Create Likes and Favorites
    const like1 = await prisma.like.create({
      data: {
        userId: user1.id,
        menuId: restaurant1.menus[0].id,
      },
    });

    const favorite1 = await prisma.favorite.create({
      data: {
        userId: user1.id,
        menuId: restaurant1.menus[1].id,
      },
    });

    const like2 = await prisma.like.create({
      data: {
        userId: user2.id,
        menuId: restaurant2.menus[0].id,
      },
    });

    const favorite2 = await prisma.favorite.create({
      data: {
        userId: user2.id,
        menuId: restaurant2.menus[1].id,
      },
    });

    console.log({
      user1,
      user2,
      restaurant1,
      restaurant2,
      like1,
      favorite1,
      like2,
      favorite2,
    });
  } catch (error) {
    console.error(error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
