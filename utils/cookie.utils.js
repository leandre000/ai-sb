import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();

export const generateTokenAndSetCookie = (user, res) => {
    try {
        const payload = { id: user._id, role : user.role };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "15d" });
        res.cookie("token", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            sameSite: "strict"
        })
    } catch (error) {
        throw new Error(error);
    }
}