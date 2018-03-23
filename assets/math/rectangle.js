"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = (function () {
    function Rectangle() {
        this.calculateRectangule = function (width, length) { return width * length; };
    }
    Rectangle.getInstance = function () {
        if (!Rectangle.instance) {
            Rectangle.instance = new Rectangle();
        }
        return Rectangle.instance;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
