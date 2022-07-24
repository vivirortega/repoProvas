import authRepository from "../repositories/authRepository";
import { UserService } from "../types/genericTypes";
import bcrypt from "bcrypt";

export async function createUser(user: UserService){
    const {email, password} = user;
    const userExist = await authRepository.checkEmail(email);
    if(userExist){
        throw{
            type: "unauthorized",
            message: "email already registered"
        };
    }
    const SALT = 10;
    user.password = await bcrypt.hash(password, SALT);
    await authRepository.createUser(user);
}

const authService = { createUser };

export default authService;