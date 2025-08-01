import mongoose from "mongoose";

const instructorSchema = mongoose.Schema({
    user : { type : mongoose.Schema.Types.ObjectId, ref : "User" },
    school : { type : mongoose.Schema.Types.ObjectId, ref : "School" },
    classes : [{ type : mongoose.Schema.Types.ObjectId, ref : "Class" }],
    courses : [ { type : mongoose.Schema.Types.ObjectId, ref : "Courses" } ]
});

const Instructor = mongoose.model("instructors", instructorSchema);
export default Instructor;