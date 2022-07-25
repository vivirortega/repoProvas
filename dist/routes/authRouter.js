"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const authSchema_1 = require("../schemas/authSchema");
const schemaValidator_1 = __importDefault(require("../middlewares/schemaValidator"));
const authRouter = (0, express_1.Router)();
authRouter.post("/sign-up", (0, schemaValidator_1.default)(authSchema_1.authSchema), authController_1.signup);
authRouter.post("/login", (0, schemaValidator_1.default)(authSchema_1.authSchema), authController_1.login);
exports.default = authRouter;
