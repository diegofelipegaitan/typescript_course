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
var testConstant = "testing a text";
console.log(testConstant);
var testVariable = "Test Variable";
function reset() {
    var testVariable = 20;
    console.log(testVariable);
}
reset();
console.log(testVariable);
var sum = function (number1, number2) {
    return number1 + number2;
};
console.log(sum(1, 2));
var sumArrowFunction = function (number1, number2) { return number1 + number2; };
console.log(sumArrowFunction(2, 1));
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
        _this.add = function (b) {
            return _this.superAdd(b);
        };
        return _this;
    }
    return ExtendedAdder;
}(Adder));
var extender = new ExtendedAdder(1);
console.log("ExtendedAdder");
console.log(extender.add(2));
var countDown = function (counter) {
    if (counter === void 0) { counter = 10; }
    var originalCounter = counter;
    while (counter > 0) {
        counter--;
    }
    return "ORIGINAL COUNTER = " + originalCounter + " -- FINAL COUNTDOWN " + counter;
};
console.log(countDown(19));
console.log(countDown());
var numbers = [1, 65, 3, -2, 4];
console.log(Math.max(1, 54, 32 - 4));
console.log(Math.max.apply(Math, numbers));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(2, 3, 4, 66));
var numbersArray = [1, 2];
var n1 = numbersArray[0], n2 = numbersArray[1];
console.log(n1, n2);
var userData = { MyName: 'Diego', age: 36 };
var newName = userData.MyName, newAge = userData.age;
console.log(newName, newAge);
var miNombre = "Diego";
var saludo = "Hola \nSoy " + miNombre;
console.log(saludo);
