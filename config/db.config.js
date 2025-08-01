import mongoose, { mongo } from "mongoose";
import {configDotenv} from "dotenv";
//configured db
configDotenv();

export const connectToDatabase = () => {
    try {
        mongoose.connect(process.env.MONGO_URI).then(() => {
            console.log("Connected to MongoDB");
        })
    } catch (error) {
        throw new Error(error)
    }
}