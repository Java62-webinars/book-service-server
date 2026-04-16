import { Router } from 'express';
import {getBooks} from '../controllers/books.controller.js';

const bookRoutes = Router();

bookRoutes.get('/books', getBooks);
// bookRoutes.post('/books', createBook);
// bookRoutes.patch('/books/:id',updateBook);
// bookRoutes.patch('/books/:id/availability',changeAvailabilityBook);


export default bookRoutes;