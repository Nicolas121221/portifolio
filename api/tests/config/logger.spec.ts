import winston from "winston";
import { Logger } from "../../src/config/logger.ts";

describe("Logger", () => {
	it("should call createLogger ", () => {
		const loggerSpy = jest.spyOn(winston, "createLogger");
		const sut = new Logger();
		expect(loggerSpy).toHaveBeenCalledTimes(1);
		expect(sut.loggeer).not.toBe(undefined);
	});

	it("should return a formated string", ()=>{
		const sut = new Logger();
		expect(sut.formatString()).toBe(`[${new Date()}] - info : mock`)

	});
});
