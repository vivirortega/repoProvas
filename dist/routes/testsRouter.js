"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testsController_1 = require("../controllers/testsController");
const schemaValidator_1 = __importDefault(require("../middlewares/schemaValidator"));
const tokenValidator_1 = require("../middlewares/tokenValidator");
const testsSchema_1 = require("../schemas/testsSchema");
const testsRouter = (0, express_1.Router)();
testsRouter.post("/create-test", tokenValidator_1.tokenValidator, (0, schemaValidator_1.default)(testsSchema_1.testsSchema), testsController_1.createTest);
testsRouter.get("/tests/disciplines", tokenValidator_1.tokenValidator, testsController_1.getTestsByDiscipline);
testsRouter.get("/tests/teacher", tokenValidator_1.tokenValidator, testsController_1.getTestsByTeacher);
exports.default = testsRouter;
