import { Circle , PI } from './math/circle';
import { Rectangle } from './math/rectangle';

let circle = Circle.getInstance();
let rectangle = Rectangle.getInstance();

console.log( circle.calculateCirc(2) );
console.log( PI );
console.log( rectangle.calculateRectangule( 1 , 2 ) );