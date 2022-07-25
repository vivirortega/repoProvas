import joi from "joi";
import { TestService } from "../types/genericTypes";

export const testsSchema = joi.object<TestService>({
  name: joi.string().required(),
  pdfUrl: joi.string().required(),
  categoryId: joi.number().required(),
  teacherDisciplineId: joi.number().required(),
});
