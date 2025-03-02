import express from 'express';
import categoryRouter from './category/category-router'
import { globalErrorHandler } from './common/middleware/global-error-handler';
import cookieParser from 'cookie-parser';
import productRouter from './product/product-router';
let app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/products", productRouter);
app.use('/categories',categoryRouter)

app.use(globalErrorHandler)

export default app;
