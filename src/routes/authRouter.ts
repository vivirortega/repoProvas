import { Router } from "express";
import { signup } from "../controllers/authController";
import { authSchema } from "../schemas/authSchema";
import schemaValidator from "../middlewares/schemaValidator";

const authRouter = Router();

authRouter.post("/sign-up", schemaValidator(authSchema), signup);

export default authRouter;