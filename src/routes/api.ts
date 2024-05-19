import { Router } from 'express';
import productRouter from './ProductRouter';

const apiRouter = Router();

apiRouter.use('/products', productRouter);

export default apiRouter;