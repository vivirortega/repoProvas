"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestsByTeacher = exports.getTestsByDiscipline = exports.createTest = void 0;
const testsService_1 = __importDefault(require("../services/testsService"));
async function createTest(req, res) {
    const test = req.body;
    await testsService_1.default.createTest(test);
    res.sendStatus(201);
}
exports.createTest = createTest;
async function getTestsByDiscipline(req, res) {
    const tests = await testsService_1.default.getTestsByDiscipline();
    res.send(tests);
}
exports.getTestsByDiscipline = getTestsByDiscipline;
async function getTestsByTeacher(req, res) {
    const tests = await testsService_1.default.getTestsByTeacher();
    res.send(tests);
}
exports.getTestsByTeacher = getTestsByTeacher;
