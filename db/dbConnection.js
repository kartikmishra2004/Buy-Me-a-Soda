import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("MongoDB connected successfully!!");
    } catch (error) {
        console.error("Failed to connect to MongoDB!!", error);
        process.exit(1);
    }
};

export default connectDb;
