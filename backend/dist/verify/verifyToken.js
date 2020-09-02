"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.verifyToken = (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.status(401).json('access denied');
    }
    const token = req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(401).json('access denied');
    }
    const payload = jsonwebtoken_1.default.verify(token, 'secretkey');
    req.userId = payload._id;
    next();
};
