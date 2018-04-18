"use strict";
function greet(person) {
    console.log("Hello " + person.name);
    console.log(person.propName);
}
function changeName(person) {
    person.name = "Diego Felipe";
}
var person = {
    name: "Diego",
    hobbies: ['read', 'tv', 'bicycle'],
    greet: function (lastName) {
        console.log("Hello " + lastName);
    }
};
greet(person);
changeName(person);
greet(person);
person.greet("ME");
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function (lastName) {
        console.log("HELLO " + this.name + " " + lastName);
    };
    return Person;
}());
var diego = new Person("Diego");
console.log(diego);
diego.greet("Gaitán");
