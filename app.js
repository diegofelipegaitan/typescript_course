"use strict";
var MyMane;
MyMane = 'Diego';
var MyTupleExample;
MyTupleExample = ["Diego", true];
var Family;
(function (Family) {
    Family[Family["Adri"] = 0] = "Adri";
    Family[Family["Coquito"] = 1] = "Coquito";
})(Family || (Family = {}));
;
var MyFamily = Family.Coquito;
console.log(MyFamily);
function returnMyName() {
    console.log(MyMane);
}
function multiply(number1, number2) {
    return number1 * number2;
}
console.log(multiply(5, 2));
