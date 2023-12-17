"use strict";
describe("type assertion", function () {
    it("it should be success convertion", function () {
        const person = {};
        person.name = "Aji";
        person.age = 20;
        expect(person).toEqual({ name: "Aji", age: 20 });
    });
});
