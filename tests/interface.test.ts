describe("interface", function(){
    it('should be support intersection types', function(){
        interface A {
            a: number;
        }
        interface B {
            b: number;
        }
        type C = A & B;
        const c: C = {a: 1, b: 2};
        expect(c).toEqual({a: 1, b: 2});
    })
})