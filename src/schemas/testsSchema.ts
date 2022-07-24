import joi from "joi";
import { testService } from "../types/genericTypes";

export const testsSchema = joi.object<testService>({
  name: joi.string().required(),
  pdfUrl: joi.string().required(),
  categoryId: joi.number().required(),
  teacherDisciplineId: joi.number().required(),
});
