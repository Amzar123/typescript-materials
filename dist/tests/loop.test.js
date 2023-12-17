"use strict";
describe('looping', function () {
    it('for loop', function () {
        const fruits = ["apple", "banana", "cherry"];
        for (let i = 0; i < fruits.length; i++) {
            expect(fruits[i]).toBe(fruits[i]);
        }
    });
    it('for in', function () {
        const fruits = ["apple", "banana", "cherry"];
        for (const i in fruits) {
            expect(fruits[i]).toBe(fruits[i]);
        }
    });
    it('for of', function () {
        const fruits = ["apple", "banana", "cherry"];
        for (const fruit of fruits) {
            expect(fruit).toBe(fruit);
        }
    });
});
