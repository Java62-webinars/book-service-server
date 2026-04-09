import { Router } from 'express';
// import postController from '../controllers/post.controller.js';
// import validate from "../middlewares/validation.middleware.js";

const bookRoutes = Router();

bookRoutes.get('/books', getBooks);
bookRoutes.post('/books', createBook);
bookRoutes.patch('/books/:id',updateBook);
bookRoutes.patch('/books/:id/availability',changeAvailabilityBook);


export default bookRoutes;