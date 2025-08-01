import mongoose from "mongoose";

const schoolSchema = mongoose.Schema({
    name : { type : String, required : true },
    admin : { type : mongoose.Schema.Types.ObjectId, ref : "User", required : true },
    email : { type : String, required : true, unique : true },
    phone : { type : String, required : true, unique : true },
    website : { type : String },
    logo : { type : String },
    instructors : [{ type : mongoose.Schema.Types.ObjectId, ref : "Instructor" }],
    students : [{ type : mongoose.Schema.Types.ObjectId, ref : "Student" }]
}, { timestamps : true });

const School = mongoose.model("schools", schoolSchema);
export default School;