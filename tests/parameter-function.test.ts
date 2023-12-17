describe('function as parameter', function(){
    it('function as parameter', function(){
        function add(a: number, b: number): number {
            return a + b;
        }
        function multiply(a: number, b: number): number {
            return a * b;
        }
        function calculate(a: number, b: number, fn: (a: number, b: number) => number): number {
            return fn(a, b);
        }
        expect(calculate(2, 3, add)).toBe(5);
        expect(calculate(2, 3, multiply)).toBe(6);
    })
})