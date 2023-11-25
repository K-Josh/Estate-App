import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    
}, {timestamps: true}); // using timestamps tells us the time of creation and update of the user.

const User = mongoose.model('User', userSchema);
export default User;