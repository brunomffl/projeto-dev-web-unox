import { Router } from "express";
import { userRoutes } from "./user-routes.js";
const apiRoutes = require("./api-routes.js");

const routes = Router();

routes.use("/login", userRoutes);
routes.use("/api", apiRoutes);

export { routes };