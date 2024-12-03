interface ILogger {
    info(msg: string): void;

    error(msg: string): void;

    debug(msg: string): void;

    warn(msg: string): void;
}

class ProductionLogger implements ILogger {
    info(msg: string): void {
    }

    error(msg: string): void {
        console.error(msg);
    }

    debug(msg: string): void {
    }

    warn(msg: string): void {
        console.log(msg)
    }
}

class DevelopmentLogger implements ILogger {
    info(msg: string): void {
        console.log(msg);
    }

    error(msg: string): void {
        console.error(msg);
    }

    debug(msg: string): void {
        console.log(msg);
    }

    warn(msg: string): void {
        console.log(msg);
    }
}

class LoggerFactory {
    public static createLogger(): ILogger {
        if (process.env.NODE_ENV === 'production') {
            return new ProductionLogger();
        } else {
            return new DevelopmentLogger();
        }
    }
}

// Testing

const logger = LoggerFactory.createLogger();

logger.debug("Debug message");
logger.warn("Warn message");
logger.info("Info message");
logger.error("Error message");



