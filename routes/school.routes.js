import express from "express";
import { authorize } from "../middlewares/auth.middlewares.js";
import { authorizeRole } from "../middlewares/role.middlewares.js"
import { createSchool, updateSchool } from "../controllers/school.controllers.js";

const schoolRouter = express.Router();

schoolRouter.post("/", authorize, authorizeRole("SYSTEM_ADMIN"), createSchool);
schoolRouter.put("/", authorize, authorizeRole("SCHOOL_PRINCIPAL"), updateSchool);

export default schoolRouter