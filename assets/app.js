console.log(123);
var CircleMath;
(function (CircleMath) {
    var Ala = (function () {
        function Ala() {
            this.a = function () { return 1; };
        }
        return Ala;
    }());
    CircleMath.Ala = Ala;
})(CircleMath || (CircleMath = {}));
