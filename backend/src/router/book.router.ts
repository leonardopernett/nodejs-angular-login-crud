import {Router} from 'express'
import {getBooks,getOneBooks,createBook,deleteBooks,updateBook} from '../controller/BookController'

const router = Router();

router.get('/',getBooks)
router.get('/:id',getOneBooks)
router.post('/',createBook)
router.delete('/:id',deleteBooks)
router.put('/:id/edit',updateBook)


export default router