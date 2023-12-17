"use strict";
describe('function as parameter', function () {
    it('function as parameter', function () {
        function add(a, b) {
            return a + b;
        }
        function multiply(a, b) {
            return a * b;
        }
        function calculate(a, b, fn) {
            return fn(a, b);
        }
        expect(calculate(2, 3, add)).toBe(5);
        expect(calculate(2, 3, multiply)).toBe(6);
    });
});
