import Elysia from "elysia";

const restaurantRoutes = new Elysia({ prefix: "/restaurants" })
  .get("/", () => "gets all restaurants")
  .get("/:name", ({ params: { name } }) => `gets restaurant by name: ${name}`)
  .get("/id/:id", ({ params: { id } }) => `gets restaurant by id: ${id}`)
  .get(
    "/menu/:name",
    ({ params: { name } }) => `gets restaurants that have ${name} on the menu`,
  )
  .get("/with-menu", () => "gets all restaurants with menus")
  .post("/", () => "creates a restaurant")
  .patch("/id/:id", () => "updates a restaurant")
  .delete("/id/:id", () => "deletes a restaurant");

export default restaurantRoutes;
