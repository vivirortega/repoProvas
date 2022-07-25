"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testsSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.testsSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    pdfUrl: joi_1.default.string().required(),
    categoryId: joi_1.default.number().required(),
    teacherDisciplineId: joi_1.default.number().required(),
});
