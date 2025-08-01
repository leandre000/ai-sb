import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["STUDENT", "INSTRUCTOR", "SCHOOL_PRINCIPAL", "SYSTEM_ADMIN"], default : "STUDENT" },
    profilePic : { type : String }
}, { timestamps: true });

userSchema.methods.getRoleProfile = async function () {
    switch (this.role) {
        case 'ADMIN':
            return await mongoose.model('ADMIN').findOne({ user: this._id });
        case 'INSTRUCTOR':
            return await mongoose.model('INSTRUCTOR').findOne({ user: this._id });
        case 'STUDENT':
            return await mongoose.model('STUDENT').findOne({ user: this._id });
        default:
            return null;
    }
};

const User = mongoose.model("users", userSchema);
export default User