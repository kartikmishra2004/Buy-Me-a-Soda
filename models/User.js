import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    profilePhoto: {
        type: String,
    },
    coverPhoto: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.models.User || model("User", userSchema);;