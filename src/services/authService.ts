import authRepository from "../repositories/authRepository";
import { Users } from "@prisma/client";
import { UserService } from "../types/genericTypes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function createUser(user: UserService) {
  const { email, password } = user;
  const userExist = await authRepository.checkEmail(email);
  if (userExist) {
    throw {
      type: "conflict",
      message: "email already registered",
    };
  }
  const SALT = 10;
  user.password = await bcrypt.hash(password, SALT);
  await authRepository.createUser(user);
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
