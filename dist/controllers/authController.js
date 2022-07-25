"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const authService_1 = __importDefault(require("../services/authService"));
async function signup(req, res) {
    const data = req.body;
    await authService_1.default.createUser(data);
    res.sendStatus(201);
}
exports.signup = signup;
async function login(req, res) {
    const data = req.body;
    const token = await authService_1.default.login(data);
    res.send(token);
}
exports.login = login;
