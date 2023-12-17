describe('looping', function(){
    it('for loop', function(){
        const fruits = ["apple", "banana", "cherry"];
        for (let i = 0; i < fruits.length; i++) {
            expect(fruits[i]).toBe(fruits[i]);
        }
    })

    it('for in', function(){
        const fruits = ["apple", "banana", "cherry"];
        for (const i in fruits) {
            expect(fruits[i]).toBe(fruits[i]);
        }
    })

    it('for of', function(){
        const fruits = ["apple", "banana", "cherry"];
        for (const fruit of fruits) {
            expect(fruit).toBe(fruit);
        }
    })

    it('while', function(){
        const fruits = ["apple", "banana", "cherry"];
        let i = 0;
        while (i < fruits.length) {
            expect(fruits[i]).toBe(fruits[i]);
            i++;
        }
    })

    it('do while', function(){
        const fruits = ["apple", "banana", "cherry"];
        let i = 0;
        do {
            expect(fruits[i]).toBe(fruits[i]);
            i++;
        } while (i < fruits.length);
    })
})