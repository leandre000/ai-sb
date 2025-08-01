import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: { type: String, required: true },
    hours_per_week: { type: Number, required: true }
}, { timestamps: true });

const Course = mongoose.model("courses", courseSchema);
export default Course;