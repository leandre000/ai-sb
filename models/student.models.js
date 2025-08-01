import mongoose from "mongoose";


//added my student model

const studentSchema = mongoose.Schema({
    user : { type : mongoose.Schema.Types.ObjectId, ref : "User" },
    class : { type : mongoose.Schema.Types.ObjectId, ref : "Class" },
    school : { type : mongoose.Schema.Types.ObjectId, ref : "School" }
})