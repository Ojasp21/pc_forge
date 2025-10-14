import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from './routes/auth.route.js'
import partRoutes from './routes/part.route.js'
import buildRoutes from './routes/build.route.js'

import cookieParser from "cookie-parser";
import GeminiRoutes from './routes/gemini.route.js'


const app = express();
dotenv.config();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });



app.use("/api/parts", partRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/build", buildRoutes);
// app.use("/api/langflow", langflowRoutes);
app.use("/api/gemini", GeminiRoutes);

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
