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
var Car = (function () {
    function Car(name) {
        this.name = name;
        this._acceleration = 0;
    }
    Object.defineProperty(Car.prototype, "acceleration", {
        get: function () {
            return this._acceleration;
        },
        set: function (value) {
            this._acceleration = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    ;
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
var BaseObject = (function () {
    function BaseObject(width, length) {
        if (width === void 0) { width = 0; }
        if (length === void 0) { length = 0; }
        var _this = this;
        this.width = width;
        this.length = length;
        this.calcSize = function () { return _this.width * _this.length; };
    }
    return BaseObject;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        return _super.call(this, width, length) || this;
    }
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle(5, 3);
console.log(rectangle.calcSize());
