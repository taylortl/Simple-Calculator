"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidDivisor = void 0;
class InvalidDivisor extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, InvalidDivisor);
    }
}
exports.InvalidDivisor = InvalidDivisor;
