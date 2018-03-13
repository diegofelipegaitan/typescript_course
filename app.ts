// Exercise 1 - How was your TypeScript Class?
class Car {
    private _acceleration: number = 0;

    public get acceleration(): number {
        return this._acceleration;
    }

    public set acceleration(value: number) {
        this._acceleration = value;
    }

    constructor(public name: string) {
    }

    honk() {
        console.log("Toooooooooot!");
    };

    accelerate (speed) {
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);



// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    constructor(public width: number = 0, public length: number = 0) { }

    calcSize = () => this.width * this.length;

}

class Rectangle extends BaseObject {

    constructor(width, length) {
        super(width, length);
    }

}

let rectangle = new Rectangle(5, 3);
console.log(rectangle.calcSize());

/*
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
*/