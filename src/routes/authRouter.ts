import { Router } from "express";
import { signup, login } from "../controllers/authController";
import { authSchema, signupSchema } from "../schemas/authSchema";
import schemaValidator from "../middlewares/schemaValidator";

const authRouter = Router();

authRouter.post("/sign-up", schemaValidator(signupSchema), signup);
authRouter.post("/login", schemaValidator(authSchema), login)

export default authRouter;