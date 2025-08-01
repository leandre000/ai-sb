import express from "express";
import { authorize } from "../middlewares/auth.middlewares.js";
import { getLoggedInUser } from "../controllers/user.controllers.js";

const userRouter = express.Router();

userRouter.get("/", authorize, getLoggedInUser);

export default userRouter