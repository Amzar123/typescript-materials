import { sayHello } from "../src/sah-hello";
describe('Hello', function () {
    it('should say hello', function () {
        const name = "Aji";
        expect(sayHello(name)).toBe("Hello Aji");
    });
});
