import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "./config/db.config.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import schoolRouter from "./routes/school.routes.js";


const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/", authRouter);
app.use("/api/users/", userRouter);
app.use("/api/schools/", schoolRouter)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    connectToDatabase()
})