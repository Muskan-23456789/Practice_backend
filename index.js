import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";   
import studentRoutes from "./routes/StudentRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js"; 

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/registrations", registrationRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});