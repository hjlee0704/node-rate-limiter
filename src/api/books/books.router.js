import { Router } from 'express';
import { getBooks } from './books.controller';

const booksRouter = new Router();

booksRouter.get('/', getBooks);

export default booksRouter;
