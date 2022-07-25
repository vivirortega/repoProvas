"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidator = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function tokenValidator(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace("Bearer ", "").trim();
    const secretKey = process.env.JWT_SECRET;
    const user = jsonwebtoken_1.default.verify(token, secretKey);
    if (!user) {
        throw {
            type: "not_found",
            message: "User not found",
        };
    }
    if (!token) {
        throw {
            type: "unauthorized",
            message: "No token",
        };
    }
    res.locals.user = user;
    next();
}
exports.tokenValidator = tokenValidator;
