"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./math/circle");
var rectangle_1 = require("./math/rectangle");
var circle = circle_1.Circle.getInstance();
var rectangle = rectangle_1.Rectangle.getInstance();
console.log(circle.calculateCirc(2));
console.log(rectangle.calculateRectangule(1, 2));
