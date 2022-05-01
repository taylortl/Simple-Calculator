"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmptyList = void 0;
class EmptyList extends Error {
    constructor(...args) {
        super(...args);
        Error.captureStackTrace(this, EmptyList);
    }
}
exports.EmptyList = EmptyList;
