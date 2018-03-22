define("math/circle", ["require", "exports"], function (require, exports) {
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
});
define("app", ["require", "exports", "math/circle"], function (require, exports, circle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var circle = circle_1.Circle.getInstance();
    console.log(circle.calculateCirc(2));
});
define("math/rectangle", ["require", "exports"], function (require, exports) {
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
});
