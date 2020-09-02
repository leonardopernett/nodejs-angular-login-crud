"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String, required: true
    },
    languajes: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    portada: {
        type: String, required: true
    },
    price: {
        type: String, required: true
    },
    author: {
        type: String, required: true
    },
    oferta: {
        type: String, required: true
    },
}, { timestamps: true });
exports.default = mongoose_1.model('Book', bookSchema);
