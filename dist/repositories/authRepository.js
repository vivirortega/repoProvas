"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmail = exports.createUser = void 0;
const database_1 = __importDefault(require("../config/database"));
async function createUser(user) {
    return await database_1.default.users.create({ data: user });
}
exports.createUser = createUser;
async function checkEmail(email) {
    const userEmail = await database_1.default.users.findFirst({ where: { email } });
    return userEmail;
}
exports.checkEmail = checkEmail;
const authRepository = { createUser, checkEmail };
exports.default = authRepository;
