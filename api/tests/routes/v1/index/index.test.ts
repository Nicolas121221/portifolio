import request from "supertest";
import { server } from "../../../../src/server.ts";
import { App } from "supertest/types.js";

describe("GET /v1/", () => {
	it("should return status 200", () => {
		request(server.app as App)
			.get("/v1/")
			.expect("Content-Type", /json/)
			.expect("Content-Length", "15")
			.expect(200)
			.end(function (err,) {
				if (err) throw err;
			});
	});
});
