import express, { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import logger from './config/logger';
import categoryRouter from './category/category-router'
let app = express();

app.use(express.json())
app.use('/categories',categoryRouter)

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: [
      {
        type: err.name,
        name: err.name,
        path: '',
        location: '',
      },
    ],
  });
});

export default app;
