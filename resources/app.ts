/**
 * Classes examples qith Inheritance
 * https://basarat.gitbooks.io/typescript/content/docs/classes.html
 */
class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(point: Point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
}

class Point3D extends Point {

    constructor(x: number, y: number, public z: number) {
        super(x, y);
    }

    add(point: Point3D) {
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}

let point3D = new Point3D(2, 3, 4)
console.log(point3D);
let point1 = point3D.add(new Point3D(2, 3, 4));
console.log(point1);

console.log("--- Static Classes ---");
class Something {
    static instances = 0;
    constructor() {
        Something.instances++;
    }
}

var s1 = new Something();
var s2 = new Something();
console.log(Something.instances);

/**
 * 
 * This class is about the class modifiers (Public, Protected and Private)
 * @class FooBase
 */
class FooBase {
    public x: number = 0;
    private y: number = 0;
    protected z: number = 0;

    constructor() {
        this.y = this.y;
    }
}

// EFFECT ON INSTANCES
var foo = new FooBase();
foo.x; // okay
// foo.y; // ERROR : private
// foo.z; // ERROR : protected

// EFFECT ON CHILD CLASSES
class FooChild extends FooBase {
    constructor() {
        super();
        this.x; // okay
        // this.y; // ERROR: private
        // this.z; // okay
    }
}

console.log("--- Define using constructor ---");
class Foo {
    constructor(public x = 0) { }
}
console.log(new Foo());
console.log(new Foo(2));