import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from './routes/auth.route.js'
import partRoutes from './routes/part.route.js'
import buildRoutes from './routes/build.route.js'
import langflowRoutes from './routes/langflow.route.js'

import cookieParser from "cookie-parser";


const app = express();


app.use(cors({
  origin: "http://localhost:5173",
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
app.use("/api/langflow", langflowRoutes);

// Start the server
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
