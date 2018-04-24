interface NamedPerson {
    name: string;
    age?: number;
    [propName: string]: any;

    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log("Hello " + person.name);
    console.log(person.propName);
}

function changeName(person: NamedPerson) {
    person.name = "Diego Felipe";
}

const person: NamedPerson = {
    name: "Diego",
    hobbies: ['read', 'tv', 'bicycle'],

    greet(lastName: string) {
        console.log("Hello " + lastName);
    }
}
greet(person);
changeName(person);
greet(person);
person.greet("ME");

class Person implements NamedPerson {

    constructor(public name: string) { }

    greet(lastName: string) {
        console.log("HELLO " + this.name + " " + lastName);
    }

}

const diego = new Person("Diego");
console.log(diego);
diego.greet("Gaitán");


// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return value1 * value2;
}


// Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 37,
    name: "Diego Felipe",
    greet(lastName: string) {
        console.log("Diego Felipe " + lastName);
    }
}

console.log(oldPerson);
console.log(oldPerson.greet( "Gaitán"));