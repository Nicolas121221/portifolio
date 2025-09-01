import { resolve } from "path";
import winston, { createLogger, format, type LoggerOptions } from "winston";
const { combine, timestamp, printf, prettyPrint, colorize } = format;

export class Logger {
	private _logger: winston.Logger;

	public readonly formatString = () =>
		printf(({ level, message, timestamp }) => {
			return `[${timestamp}] - ${level}: ${message}`;
		});

	private loggerOptions: LoggerOptions = {
		level: "debug",
		levels: winston.config.syslog.levels,
		transports: [
			new winston.transports.File({
				filename: resolve(__dirname, "../../logs/system.log"),
				format: combine(prettyPrint(), timestamp(), prettyPrint()),
			}),
			new winston.transports.Console({
				format: combine(
					prettyPrint(),
					timestamp(),
					colorize({ all: true }),
					this.formatString(),
				),
			}),
			new winston.transports.File({
				filename: resolve(__dirname, "../../logs/errors.log"),
				format: combine(prettyPrint(), timestamp(), prettyPrint()),
				level: "error",
			}),
		],
	};

	constructor() {
		this._logger = createLogger(this.loggerOptions);
	}

	get loggeer(): winston.Logger {
		return this._logger;
	}
}

export const logger = new Logger().loggeer;
