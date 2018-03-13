var MathOperations;
(function (MathOperations) {
    var Algorithm = (function () {
        function Algorithm() {
            var _this = this;
            this.PI = 3.1415;
            this.calculateCirc = function (diameter) { return diameter * _this.PI; };
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
    MathOperations.Algorithm = Algorithm;
})(MathOperations || (MathOperations = {}));
var NewMathOperations;
(function (NewMathOperations) {
    var Algorithm = (function () {
        function Algorithm() {
            this.PI = 1415;
        }
        Algorithm.getInstance = function () {
            if (!Algorithm.instance) {
                Algorithm.instance = new Algorithm();
            }
            return Algorithm.instance;
        };
        return Algorithm;
    }());
    NewMathOperations.Algorithm = Algorithm;
})(NewMathOperations || (NewMathOperations = {}));
var algorithm = MathOperations.Algorithm.getInstance();
var newAlgorithm = NewMathOperations.Algorithm.getInstance();
console.log(algorithm.PI);
console.log(newAlgorithm.PI);
