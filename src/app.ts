import express from "express";
import dotenv from "dotenv";
import indexRouter from "./routes/index.routes";
import userRoute from "./routes/users.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/", indexRouter);
app.use("/users", userRoute);

export default app;
