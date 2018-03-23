import {Circle} from './math/circle';
import { Rectangle } from './math/rectangle';

let circle = Circle.getInstance();
let rectangle = Rectangle.getInstance();

console.log( circle.calculateCirc(2) );
console.log( rectangle.calculateRectangule( 1 , 2 ) );