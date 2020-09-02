"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const book_router_1 = __importDefault(require("./router/book.router"));
const auth_router_1 = __importDefault(require("./router/auth.router"));
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.use(morgan_1.default('dev'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(cors_1.default());
//router
app.use('/api/books', book_router_1.default);
app.use(auth_router_1.default);
app.use(express_1.default.static(path_1.default.resolve('./dist/public')));
exports.default = app;
