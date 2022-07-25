"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function schemaValidator(schema) {
    return (req, res, next) => {
        const validation = schema.validate(req.body);
        if (validation.error) {
            throw { type: "bad_request", message: "erro ao validar schema" };
        }
        next();
    };
}
exports.default = schemaValidator;
