import { Router } from 'express';
// import postController from '../controllers/post.controller.js';
// import validate from "../middlewares/validation.middleware.js";

const orderRoutes = Router();

orderRoutes.get('/orders/:id', getOrder);
orderRoutes.post('/orders', createOrder);



export default orderRoutes;