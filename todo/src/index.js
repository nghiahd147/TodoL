import express from "express";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import todoRoute from "./routes/todoRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/api", todoRoute);
app.use("/api", categoryRoute);

connectDb(
  app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
  })
);
