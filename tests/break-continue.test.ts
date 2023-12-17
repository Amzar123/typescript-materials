describe('beak and continue', function(){
    it('break', function(){
        const fruits = ["apple", "banana", "cherry"];
        for (let i = 0; i < fruits.length; i++) {
            if (fruits[i] === "banana") {
                break;
            }
            expect(fruits[i]).toBe(fruits[i]);
        }
    })

    it('continue', function(){
        const fruits = ["apple", "banana", "cherry"];
        for (let i = 0; i < fruits.length; i++) {
            if (fruits[i] === "banana") {
                continue;
            }
            expect(fruits[i]).toBe(fruits[i]);
        }
    })
})