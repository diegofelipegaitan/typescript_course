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
