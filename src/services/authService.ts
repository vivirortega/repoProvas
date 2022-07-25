import authRepository from "../repositories/authRepository";
import { Users } from "@prisma/client";
import { UserService } from "../types/genericTypes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { encryptPassword } from "../utils/authUtils";

export type newUser = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

export async function createUser(user: newUser) {
  const userExist = await authRepository.checkEmail(user.email);
  if (userExist) {
    throw {
      type: "conflict",
      message: "email already registered",
    };
  }

  const encryptedPassword = encryptPassword(user.password);
  await authRepository.createUser({
    email: user.email,
    password: encryptedPassword,
  });
}

export async function login(userData: UserService) {
  const { email, password } = userData;
  const user = await authRepository.checkEmail(email);

  if (!user) {
    throw {
      type: "unauthorized",
      message: "Wrong email or password",
    };
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw {
      type: "unauthorized",
      message: "Wrong email or password",
    };
  }

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  return { token };
}

const authService = { createUser, login };

export default authService;
