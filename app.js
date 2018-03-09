var Person = (function () {
    function Person(name, username) {
        this.name = name;
        this.username = username;
    }
    return Person;
}());
var person = new Person("Diego", "proimond");
console.log(person);
