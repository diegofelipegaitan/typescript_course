"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Adder = (function () {
    function Adder(a) {
        var _this = this;
        this.a = a;
        this.add = function (b) { return _this.a + b; };
    }
    return Adder;
}());
var ExtendedAdder = (function (_super) {
    __extends(ExtendedAdder, _super);
    function ExtendedAdder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.superAdd = _this.add;
        _this.add = function (b) { return _this.superAdd(b); };
        return _this;
    }
    return ExtendedAdder;
}(Adder));
console.log("-- Arrow functions and inheritance ---");
var adder = new Adder(1);
console.log(adder.add(2));
var extendedAdder = new ExtendedAdder(2);
console.log(extendedAdder.add(2));
