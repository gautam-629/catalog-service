import express, { NextFunction, Request, Response } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import logger from './config/logger';
import config from 'config'
let app = express();

app.get('/', (req, res, next) => {
       res.json({message:config.get('server.port')})
});

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
