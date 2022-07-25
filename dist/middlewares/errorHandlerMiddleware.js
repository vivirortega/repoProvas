"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function errorHandler(error, req, res, next) {
    console.log(error);
    if (error.code) {
        return res.status(error.code).send(error.message);
    }
    return res.sendStatus(500);
}
exports.default = errorHandler;
