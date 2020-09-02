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
exports.updateBook = exports.createBook = exports.deleteBooks = exports.getOneBooks = exports.getBooks = void 0;
const Book_1 = __importDefault(require("../model/Book"));
exports.getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield Book_1.default.find();
    res.json(books);
});
exports.getOneBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield Book_1.default.findById(req.params.id);
    res.json(book);
});
exports.deleteBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield Book_1.default.deleteOne({ _id: req.params.id });
    res.json({ message: 'book deleted' });
});
exports.createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, languajes, description, portada, price, author, oferta } = req.body;
    const newBook = { title, languajes, description, portada, price, author, oferta };
    const book = new Book_1.default(newBook);
    yield book.save();
    res.json({ message: 'book saved' });
});
exports.updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, languajes, description, portada, price, author, oferta } = req.body;
    const newBook = { title, languajes, description, portada, price, author, oferta };
    if (newBook) {
        yield Book_1.default.updateOne({ _id: req.params.id }, newBook);
        res.json({ message: 'book update' });
    }
});
