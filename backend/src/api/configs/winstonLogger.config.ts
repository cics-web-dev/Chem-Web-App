import winston from 'winston';

/**
 * This custom winston logger will log any incoming HTTP requests to the `backend/logs` folder 
 * in the `combined.log` and `error.log` file.
 * 
 * The `combined.log` includes both informational and error logs.
 * The `error.log` includes only the error log.
 * 
 * The `simple` format is used.
 */
const winstonLogger = winston.createLogger({
    transports: [
        new winston.transports.File({
            filename: './logs/combined.log',
            maxsize: 10000000, // max size of file to, log file will be rotated when reaching 10MB
        }),
        new winston.transports.File({
            level: 'error',
            filename: './logs/error.log',
            maxsize: 10000000,
        }),
    ],

    format: winston.format.combine(winston.format.simple()),
});

export default winstonLogger;
