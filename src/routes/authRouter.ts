import { Router } from "express";
import { signup, login } from "../controllers/authController";
import { authSchema } from "../schemas/authSchema";
import schemaValidator from "../middlewares/schemaValidator";

const authRouter = Router();

authRouter.post("/sign-up", schemaValidator(authSchema), signup);
authRouter.post("/login", schemaValidator(authSchema), login)

export default authRouter;