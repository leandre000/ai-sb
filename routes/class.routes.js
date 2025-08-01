import express from "express"
import { authorize } from "../middlewares/auth.middlewares.js";
import { authorizeRole } from "../middlewares/role.middlewares.js";

const classRouter = express.Router();

classRouter.get("/class", authorize, authorizeRole("INSTRUCTOR", "ADMIN", "STUDENT"), getClass);

export default classRouter