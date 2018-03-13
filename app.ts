// Exercise 1 - How was your TypeScript Class?
class Car {
    public acceleration: number = 0;

    constructor(public name: string) { }

    honk() {
        console.log("Toooooooooot!");
    };

    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class BaseObject {
    constructor(public width: number = 0, public length: number = 0) { }
}

class Rectangle extends BaseObject {
    calcSize = () => this.width * this.length;
}

let rectangle = new Rectangle(3, 3);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {

    private _firstName: string = "";

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = (value.length > 3) ? value : "";
    }

}

let person = new Person();
console.log(person.firstName);
person.firstName = "Di";
console.log(person.firstName);
person.firstName = "Diego";
console.log(person.firstName);
