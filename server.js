import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import testRouters from "./routes/testRouters.js";
import { connectDB } from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import restorantRoute from "./routes/restorantRoute.js";

dotenv.config();
// mongo db connection =============
connectDB();

const app = express();
const PORT = process.env.PORT || 9000;

// middlewares =============
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/test", testRouters);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/restorant", restorantRoute);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Home Page");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
