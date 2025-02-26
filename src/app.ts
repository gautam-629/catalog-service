import express from 'express';
import categoryRouter from './category/category-router'
import { globalErrorHandler } from './common/middleware/global-error-handler';
import cookieParser from 'cookie-parser';
let app = express();

app.use(express.json())
app.use(cookieParser())
app.use('/categories',categoryRouter)

app.use(globalErrorHandler)

export default app;
