"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.signin = exports.signup = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../model/User"));
function addToken(user) {
    return jsonwebtoken_1.default.sign({ _id: user._id }, 'secretkey', { expiresIn: 60 * 60 * 24 });
}
exports.signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullname, email, password } = req.body;
    const emailVerify = yield User_1.default.findOne({ email: email });
    if (emailVerify) {
        return res.status(400).json('email already exist');
    }
    const user = new User_1.default({ fullname, email, password });
    user.password = yield user.encryptPassword(password);
    const userSave = yield user.save();
    res.json({ token: addToken(userSave) });
});
exports.signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fullname, email, password } = req.body;
    const user = yield User_1.default.findOne({ email: email });
    if (!user) {
        return res.status(400).json('email not exist');
    }
    const verifyPassword = yield user.comparePassword(password);
    if (!verifyPassword) {
        return res.status(400).json('password wrong');
    }
    res.json({ token: addToken(user) });
});
exports.profile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findById(req.userId, { password: 0 });
    console.log(user);
    res.send('receive');
});
