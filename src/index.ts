import { Elysia } from "elysia";
import menuRoutes from "@/routes/menu";
import getVersion from "./lib/helpers/getVersion";
import restaurantRoutes from "./routes/restaurants";

const app = new Elysia();

app
  .group(`/api/v${getVersion() || "1.0"}`, (app) => app.use(menuRoutes))
  .group(`/api/v${getVersion() || "1.0"}`, (app) => app.use(restaurantRoutes))
  .listen(process.env.API_PORT || 3049);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);
