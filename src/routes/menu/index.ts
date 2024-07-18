import {
  createMenu,
  getAllMenus,
  getAllMenusWithAllergenics,
  getAllMenusWithRestaurant,
  getAllMenusWithRestaurantAndLabel,
  getAllMenusWithRestaurantAndLabelAndAllergenics,
  getMenuById,
  getMenuByName,
  getMenuByNameWithAllergenics,
  getMenuByRestaurantName,
} from "@/db/menu";
import { Elysia } from "elysia";

const menuRoutes = new Elysia({ prefix: "/menus" })
  .get("/", () => getAllMenus())
  .get("/with-restaurant", () => getAllMenusWithRestaurant())
  .get("/with-allergenics", () => getAllMenusWithAllergenics())
  .get("/with-restaurant-and-label", () => getAllMenusWithRestaurantAndLabel())
  .get("/with-restaurant-and-label-and-allergenics", () =>
    getAllMenusWithRestaurantAndLabelAndAllergenics()
  )
  .get("/:name", ({ params: { name } }) => getMenuByName(name))
  .get("/:name/with-allergenics", ({ params: { name } }) =>
    getMenuByNameWithAllergenics(name)
  )
  .get("/id/:id", ({ params: { id } }) => {
    const numberId = Number(id);
    return getMenuById(numberId);
  })
  .get("/restaurant/:name", ({ params: { name } }) =>
    getMenuByRestaurantName(name)
  )
  .post("/", () => createMenu())
  .patch("/id/:id", () => "updates a menu")
  .delete("/id/:id", () => "deletes a menu");

export default menuRoutes;
