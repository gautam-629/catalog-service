import app from './app';
import config from 'config'
import logger from './config/logger';
import { initDB } from './config/db';

const startServer = async() => {
  const PORT=config.get('server.port') || 5500
  try {
    await initDB()
    logger.info('Database connected successfully')
    app.listen(PORT, () => {
      logger.info(`Server Running at port ${PORT}`);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

startServer();
