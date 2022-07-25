"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestsByTeacher = exports.getTestsByDiscipline = exports.createTest = void 0;
const testsRepository_1 = __importDefault(require("../repositories/testsRepository"));
async function createTest(test) {
    await testsRepository_1.default.createTest(test);
}
exports.createTest = createTest;
async function getTestsByDiscipline() {
    const tests = await testsRepository_1.default.getTestsByDiscipline();
    return tests;
}
exports.getTestsByDiscipline = getTestsByDiscipline;
async function getTestsByTeacher() {
    const tests = await testsRepository_1.default.getTestsByTeacher();
    return tests;
}
exports.getTestsByTeacher = getTestsByTeacher;
const testsService = { createTest, getTestsByDiscipline, getTestsByTeacher };
exports.default = testsService;
