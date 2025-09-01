import { RequestHandler } from "express";
import { logger } from "../../config/logger.ts";

export const requestTime: RequestHandler = (req, res, next): void => {
	const requestTimeStart: number = Date.now();

	res.on("finish", () => {
		const requestTime = Date.now() - requestTimeStart;
		logger.debug({ request_time: requestTime, path: req.url });
	});

	next();
};
