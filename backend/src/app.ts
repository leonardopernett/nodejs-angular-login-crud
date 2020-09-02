import express from 'express';
import morgan from 'morgan'
import path from 'path';
import cors from 'cors';

import book from  './router/book.router'
import auth from  './router/auth.router'

const app = express();

app.set('port',process.env.PORT || 3000)

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(cors())

 
//router
app.use('/api/books',book)
app.use(auth)

app.use(express.static(path.resolve('./dist/public')))
export default app;