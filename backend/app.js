import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from './routes/auth.route.js'
import partRoutes from './routes/part.route.js'
import cookieParser from "cookie-parser";


const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
dotenv.config();
mongoose.connect('mongodb+srv://akashkawle2995:mongodb2995@cluster0.85no6.mongodb.net/pcforge?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });



app.use("/api/parts", partRoutes);
app.use("/api/auth", authRoutes);
// Start the server
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
