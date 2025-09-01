import dotenv from "dotenv";
import express, { Application, json, urlencoded } from "express";
import { requestTime } from "./shared/middlewares/request-time.ts";
import { logger } from "./config/logger.ts";

export class App {
	private _app: express.Application = express();

	get app(): Application {
		return this._app;
	}

	routes(): void {
		this.app.use("/v1", (req, res) => res.status(200).send({ message: "API running for more information visit http://github.com/Nicolas121221" }));
	}

	middlewares(): void {
		this.app.use(requestTime);
	}
	configure(): void {
		this.app.use(urlencoded({ extended: true }));
		this.app.use(json());
		dotenv.config({ override: false, quiet: true });
	}

	listen(port: number) {
		this.app.listen(port, () => {
			logger.info(`Server running in Port ${port}`);
			logger.info(`http://localhost:${port}/v1/`);
		});
	}
}

export const app = new App();
