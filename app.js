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
