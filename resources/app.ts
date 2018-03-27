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
setTimeout(person.growOld, 10);
setTimeout(function () { console.log(person.age); }, 20); // 2