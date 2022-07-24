import prisma from "../config/database";
import { UserService } from "../types/genericTypes";

export async function createUser(user: UserService) {
  return await prisma.users.create({ data: user });
}

export async function checkEmail(email: string) {
    const userEmail = await prisma.users.findFirst({ where: {email} });
    return userEmail;
}

const authRepository = { createUser, checkEmail };

export default authRepository;
