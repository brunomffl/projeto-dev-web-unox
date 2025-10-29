import { Router } from "express";
import { UserController } from "../controller/user-controller.js";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', userController.login.bind(userController));

userRoutes.post("/create", userController.create.bind(userController));

export { userRoutes };