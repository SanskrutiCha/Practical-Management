import express from "express";
import dotenv from "dotenv";
import dbConnect from "../config/database.js";
import router from "../routes/practicalRoutes.js";

const app=express();
const PORT = 3001 || express.env.PORT;
app.use(express.json())
dotenv.config();
dbConnect();

app.use("/api/v1",router)


app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
});             