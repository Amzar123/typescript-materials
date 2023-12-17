describe("type assertion", function(){
    it("it should be success convertion", function() {
        interface Person {
            name: string;
            age: number;
        }

        const person = {} as Person;
        person.name = "Aji";
        person.age = 20;
        expect(person).toEqual({name: "Aji", age: 20});

    })
})
