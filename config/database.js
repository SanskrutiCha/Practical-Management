import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbConnect=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://sanskruti:Sanskruti%4018@cluster0.jktqw.mongodb.net/Practical-Management");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Connection is failed",error);
    }
};
export default dbConnect;