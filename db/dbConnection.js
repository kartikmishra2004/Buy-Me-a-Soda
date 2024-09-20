import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDb connected successfully!!");
    } catch (error) {
        console.log("Failed to connect to MongoDB!!");
    }
}

export default connectDb;