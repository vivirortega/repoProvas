"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRouter_1 = __importDefault(require("./authRouter"));
const testsRouter_1 = __importDefault(require("./testsRouter"));
const router = (0, express_1.Router)();
router.use(authRouter_1.default);
router.use(testsRouter_1.default);
exports.default = router;
