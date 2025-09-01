import { app, App } from "./app.ts";

class Server {
	private readonly app: App;

	constructor(app:App, ) {
		this.app = app;

		this.app.init()
	}
}

const server = new Server(app);

export default server

