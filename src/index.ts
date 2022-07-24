import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index";
import { errorHandler } from "./middlewares/errorHandlerMiddleware";
import "express-async-errors";

dotenv.config();

const app = express()
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Server working on port ${process.env.PORT}`));