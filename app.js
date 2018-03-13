var Car = (function () {
    function Car(name) {
        this.name = name;
        this._acceleration = 0;
        this.accelerate = function (speed) {
            this.acceleration = this.acceleration + speed;
        };
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
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
