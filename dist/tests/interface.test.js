"use strict";
describe("interface", function () {
    it('should be support intersection types', function () {
        const c = { a: 1, b: 2 };
        expect(c).toEqual({ a: 1, b: 2 });
    });
});
