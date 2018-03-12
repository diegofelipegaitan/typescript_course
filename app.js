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
var Person = (function () {
    function Person(name, username) {
        this.name = name;
        this.username = username;
        this.age = 26;
    }
    Object.defineProperty(Person.prototype, "$typePerson", {
        get: function () {
            return this.typePerson;
        },
        set: function (value) {
            this.typePerson = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "$age", {
        get: function () {
            return this.age;
        },
        set: function (value) {
            this.age = value;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    return Person;
}());
var person = new Person("Diego", "proimond");
person.$typePerson = "Diego";
console.log(person);
var Diego = (function (_super) {
    __extends(Diego, _super);
    function Diego(username) {
        var _this = _super.call(this, '5555', username) || this;
        _this.name = "Felipe;";
        return _this;
    }
    return Diego;
}(Person));
var diego = new Diego("proimond81");
diego.$age = 36;
diego.$typePerson = "nice";
diego.printAge();
console.log("Diego");
var Plant = (function () {
    function Plant() {
        this._species = "Algo";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return "Hey, i'm a " + this._species;
        },
        set: function (value) {
            this._species = value;
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "NEW ONE";
console.log(plant.species);
