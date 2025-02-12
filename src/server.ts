import app from './app';
import config from 'config'
import logger from './config/logger';

const startServer = () => {
  const PORT=config.get('server.port') || 5500
  try {
    app.listen(PORT, () => {
      logger.info(`Server Running at port ${PORT}`);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

startServer();
