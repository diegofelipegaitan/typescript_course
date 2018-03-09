class Person {

    //private typePerson: string;
    protected age: number;

    constructor(public name: string, public username: string) { }
}

const person = new Person("Diego", "proimond");

console.log(person);