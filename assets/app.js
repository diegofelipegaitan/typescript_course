"use strict";
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
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.add = function (point) {
        return new Point(this.x + point.x, this.y + point.y);
    };
    return Point;
}());
var Point3D = (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.add = function (point) {
        var point2D = _super.prototype.add.call(this, point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    };
    return Point3D;
}(Point));
var point3D = new Point3D(2, 3, 4);
console.log(point3D);
var point1 = point3D.add(new Point3D(2, 3, 4));
console.log(point1);
console.log("--- Static Classes ---");
var Something = (function () {
    function Something() {
        Something.instances++;
    }
    Something.instances = 0;
    return Something;
}());
var s1 = new Something();
var s2 = new Something();
console.log(Something.instances);
var FooBase = (function () {
    function FooBase() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.y = this.y;
    }
    return FooBase;
}());
var foo = new FooBase();
foo.x;
var FooChild = (function (_super) {
    __extends(FooChild, _super);
    function FooChild() {
        var _this = _super.call(this) || this;
        _this.x;
        return _this;
    }
    return FooChild;
}(FooBase));
console.log("--- Define using constructor ---");
var Foo = (function () {
    function Foo(x) {
        if (x === void 0) { x = 0; }
        this.x = x;
    }
    return Foo;
}());
console.log(new Foo());
console.log(new Foo(2));
