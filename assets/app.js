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
