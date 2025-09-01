import { app, App } from "./app.ts";
// import { logger } from "./config/logger.ts";

export class Server {
	private _app: App;
	private readonly port: number;

	get app(): Express.Application {
		return this._app.app;
	}

	constructor(app: App, port: number) {
		this._app = app;
		this.port = port;

		this.start();
	}

	start(): void {
		this._app.configure();
		this._app.middlewares();
		this._app.routes();
		this._app.listen(this.port);
	}
}

export const server = new Server(app, 3000);
