"use strict";
function iTakeItAll(first, second) {
    var allOthers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        allOthers[_i - 2] = arguments[_i];
    }
    console.log(allOthers);
}
iTakeItAll('foo', 'bar');
iTakeItAll('foo', 'bar', 'bas', 'qux');
var a = function () {
    var someParameters = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        someParameters[_i] = arguments[_i];
    }
    console.log(someParameters);
};
a();
a(2, 3, "123");
