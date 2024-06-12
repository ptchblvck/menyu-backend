import { Elysia } from "elysia";

const menuRoutes = new Elysia({ prefix: "/menus" })
  .get("/", () => "get all menus")
  .get("/:name", () => `get menus with by name`)
  .get("/restaurant/:name", () => `get menus by restaurant name`)
  .post("/", () => "create a menu")
  .patch("/:name", () => "updates a menu")
  .delete("/:name", () => "deletes a menu");

export default menuRoutes;
