"use strict";
var inc = function (x) { return x + 1; };
console.log(inc(2));
var Person = (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Person;
}());
var person = new Person(1);
setTimeout(person.growOld, 10);
setTimeout(function () { console.log(person.age); }, 20);
