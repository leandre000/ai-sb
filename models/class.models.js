import mongoose from "mongoose";

const classSchema = mongoose.Schema({
    name : { type : String, required : true },
    school : { type : mongoose.Schema.Types.ObjectId, ref : "School" },
    students: [{ student: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }],
    class_teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

const Class = mongoose.model("classes", classSchema);
export default Class