import { Router } from "express";
import { createTest, getTestsByDiscipline } from "../controllers/testsController";
import schemaValidator from "../middlewares/schemaValidator";
import { tokenValidator } from "../middlewares/tokenValidator";
import { testsSchema } from "../schemas/testsSchema";

const testsRouter = Router();

testsRouter.post("/create-test", tokenValidator, schemaValidator(testsSchema), createTest);
testsRouter.get("/tests/disciplines", tokenValidator, getTestsByDiscipline);

export default testsRouter;