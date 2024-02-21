import morgan from 'morgan';
import logger from '../configs/winstonLogger.config.js';

const format = ':method :url :status :response-time ms HTTP/:http-version [:date]';

/**
 * This custom morgan middleware will use the `winstonLogger` to
 * log any incoming HTTP requests to the `backend/logs` folder
 * in the `combined.log` and `error.log` file.
 *
 * This is helpful for development purpose which allows us to keep track of previous request.
 */
const morganMiddleware = morgan(format, {
    stream: {
        write: message => {
            const trimmedMessage = message.trim();
            const statusCode = parseInt(trimmedMessage.split(' ')[2]);
            if (statusCode <= 399) {
                logger.info(trimmedMessage);
            } else if (statusCode >= 400 && statusCode <= 599) {
                logger.error(trimmedMessage);
            }
        },
    },
});

export default morganMiddleware;
