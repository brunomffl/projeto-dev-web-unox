import { Router } from "express";
import { UserController } from "../controller/user-controller.js";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/', (req, res) => {
    userController.login(req, res);
});

export { userRoutes };