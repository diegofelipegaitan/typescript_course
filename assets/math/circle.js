"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle = (function () {
    function Circle() {
        var _this = this;
        this.PI = 3.1415;
        this.calculateCirc = function (diameter) { return diameter * _this.PI; };
    }
    Circle.getInstance = function () {
        if (!Circle.instance) {
            Circle.instance = new Circle();
        }
        return Circle.instance;
    };
    return Circle;
}());
exports.Circle = Circle;
