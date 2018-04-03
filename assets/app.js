"use strict";
function greet(person) {
    console.log("Hello " + person.name);
}
function changeName(person) {
    person.name = "Diego Felipe";
}
var person = {
    name: "Diego",
    age: 36
};
greet(person);
changeName(person);
greet(person);
