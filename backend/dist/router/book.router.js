"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BookController_1 = require("../controller/BookController");
const router = express_1.Router();
router.get('/', BookController_1.getBooks);
router.get('/:id', BookController_1.getOneBooks);
router.post('/', BookController_1.createBook);
router.delete('/:id', BookController_1.deleteBooks);
router.put('/:id/edit', BookController_1.updateBook);
exports.default = router;
