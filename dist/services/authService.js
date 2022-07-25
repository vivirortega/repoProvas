"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.createUser = void 0;
const authRepository_1 = __importDefault(require("../repositories/authRepository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function createUser(user) {
    const { email, password } = user;
    const userExist = await authRepository_1.default.checkEmail(email);
    if (userExist) {
        throw {
            type: "unauthorized",
            message: "email already registered",
        };
    }
    const SALT = 10;
    user.password = await bcrypt_1.default.hash(password, SALT);
    await authRepository_1.default.createUser(user);
}
exports.createUser = createUser;
async function login(userData) {
    const { email, password } = userData;
    const user = await authRepository_1.default.checkEmail(email);
    if (!user) {
        throw {
            type: "unauthorized",
            message: "Wrong email or password",
        };
    }
    const validPassword = await bcrypt_1.default.compare(password, user.password);
    if (!validPassword) {
        throw {
            type: "unauthorized",
            message: "Wrong email or password",
        };
    }
    const token = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    return { token };
}
exports.login = login;
const authService = { createUser, login };
exports.default = authService;
