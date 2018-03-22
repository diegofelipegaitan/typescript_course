var CircleMath;
(function (CircleMath) {
    var Algorithm = (function () {
        function Algorithm() {
            var _this = this;
            this.PI = 3.1415;
            this.calculateCirc = function (diameter) { return diameter * _this.PI; };
        }
        Algorithm.getInstance = function () {
            if (!Algorithm.instance) {
                Algorithm.instance = new Algorithm();
            }
            return Algorithm.instance;
        };
        return Algorithm;
    }());
    CircleMath.Algorithm = Algorithm;
})(CircleMath || (CircleMath = {}));
var RectangleMath;
(function (RectangleMath) {
    var Algorithm = (function () {
        function Algorithm() {
            this.calculateRectangule = function (width, length) { return width * length; };
        }
        Algorithm.getInstance = function () {
            if (!Algorithm.instance) {
                Algorithm.instance = new Algorithm();
            }
            return Algorithm.instance;
        };
        return Algorithm;
    }());
    RectangleMath.Algorithm = Algorithm;
})(RectangleMath || (RectangleMath = {}));
console.log(CircleMath.Algorithm.getInstance().calculateCirc(1));
console.log(RectangleMath.Algorithm.getInstance().calculateRectangule(1, 2));
