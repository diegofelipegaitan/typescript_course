var inc = (x: number) => x + 1;
console.log(inc(2));

/**
 * This function has errors, that's the reason they are commented
 */
/* function PersonUgly(age) {
    this.age = age;
    this.growOld = function () {
        this.age++;
    }
}
var personUgly = new PersonUgly(1);
setTimeout(personUgly.growOld, 1000);
setTimeout(function () { console.log(personUgly.age); }, 2000); 

function PersonNice(age) {
    this.age = age;
    this.growOld = () => {
        this.age++;
    }
}
var personNice = new PersonNice(1);
setTimeout(personNice.growOld, 1000);
setTimeout(function () { console.log(personNice.age); }, 2000); // 2
 */

class Person {
    constructor(public age: number) { }
    growOld = () => {
        this.age++;
    }
}
var person = new Person(1);

/* 
setTimeout(person.growOld, 10);
setTimeout(function () { console.log(person.age); }, 20); // 2
 */

class Adder {
    constructor(public a: number) { }
    // This function is now safe to pass around
    add = (b: number): number => this.a + b;
}

class ExtendedAdder extends Adder {
    // Create a copy of parent before creating our own
    private superAdd = this.add;
    // Now create our override
    add = (b: number): number => this.superAdd(b);
}

console.log("-- Arrow functions and inheritance ---" );
let adder = new Adder(1);
console.log(adder.add(2));

let extendedAdder = new ExtendedAdder(2);
console.log(extendedAdder.add(2));
