"use strict";
var foo = 123;
if (true) {
    var foo = 456;
}
console.log(foo);
var foo1 = 123;
if (true) {
    var foo1_1 = 456;
    console.log(foo1_1);
}
console.log(foo1);
var index = 0;
var array = [1, 2, 3];
for (var index_1 = 0; index_1 < array.length; index_1++) {
    console.log(array[index_1]);
}
console.log(index);
var variable = 'x';
var x = 'X variable';
switch (variable) {
    case 'x': {
        var x_1 = 5;
        console.log(x_1);
        break;
    }
    case 'y': {
        var x_2 = 10;
        console.log(x_2);
        break;
    }
}
console.log(x);
var funcs = [];
var _loop_1 = function (i) {
    funcs.push(function () {
        console.log(i);
    });
};
for (var i = 0; i < 3; i++) {
    _loop_1(i);
}
for (var j = 0; j < 3; j++) {
    funcs[j]();
}
