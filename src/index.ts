import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";

dotenv.config();

const app = express()
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => console.log(`Server working on port ${process.env.PORT}`));