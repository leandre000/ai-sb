import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();

export const authorize = (req, res, next) => {
    const { token } = req.cookies;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(!decoded) return res.status(403).json({ message : "Invalid token" });
        req.user = decoded;
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message : "Internal server error" })
    }
}