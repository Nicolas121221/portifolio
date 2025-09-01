import winston, { createLogger, format, type LoggerOptions } from "winston";

const { combine, timestamp, label, prettyPrint } = format;

const loggerOptions: LoggerOptions = {
	format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    prettyPrint()
  ),

transports:[
	new winston.transports.Console(),
	new winston.transports.File({filename:'../logs/info.logs'})
]
};

class Logger {
	private loggerOptions: LoggerOptions;

	constructor(loggerOptions: LoggerOptions) {
		this.loggerOptions = loggerOptions;
		this.init();
	}

	public init(): winston.Logger {
		const logger: winston.Logger = createLogger(this.loggerOptions);

		console.log(process.env.NODE_ENV);

		return logger;
	}
}

const logger = new Logger(loggerOptions)

export default logger.init() ;
