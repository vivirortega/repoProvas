"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTestsByTeacher = exports.getTestsByDiscipline = exports.createTest = void 0;
const database_1 = __importDefault(require("../config/database"));
async function createTest(test) {
    return await database_1.default.tests.create({ data: test });
}
exports.createTest = createTest;
async function getTestsByDiscipline() {
    const test = await database_1.default.terms.findMany({
        select: {
            number: true,
            Disciplines: {
                select: {
                    name: true,
                    TeacherDiscipline: {
                        select: {
                            Teachers: { select: { name: true } },
                            tests: {
                                select: {
                                    name: true,
                                    pdfUrl: true,
                                    Categories: { select: { name: true } },
                                },
                            },
                        },
                    },
                },
            },
        },
    });
    return test;
}
exports.getTestsByDiscipline = getTestsByDiscipline;
async function getTestsByTeacher() {
    const test = await database_1.default.teachers.findMany({
        select: {
            name: true,
            TeacherDiscipline: {
                select: {
                    Disciplines: {
                        select: { name: true, Terms: { select: { number: true } } },
                    },
                    tests: {
                        select: {
                            name: true,
                            pdfUrl: true,
                            Categories: { select: { name: true } },
                        },
                    },
                },
            },
        },
    });
    return test;
}
exports.getTestsByTeacher = getTestsByTeacher;
const testRepository = { createTest, getTestsByDiscipline, getTestsByTeacher };
exports.default = testRepository;
