import joi from "joi";
import { UserService } from "../types/genericTypes";

export const authSchema = joi.object<UserService>({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
