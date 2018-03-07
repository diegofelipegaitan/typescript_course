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
function multiply(number1, number2) {
    return number1 * number2;
}
var MyMultyply;
MyMultyply = multiply;
var UserData;
UserData = {
    age: 32,
    name: "Diego"
};
var ComplexObject;
ComplexObject = {
    data: [1, 2, 3],
    output: function (all) { return this.data; }
};
var ComplexObject2 = {
    data: [1, 3, 3],
    output: function (all) { return this.data; }
};
var RealAge = 27;
RealAge = "27";
function NeverTyper() {
    throw new Error('test');
}
var CanBeNull = 12;
CanBeNull = null;
