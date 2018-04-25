"use strict";
var MyMap = (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem("diego", 36);
numberMap.setItem("adriana", 37);
numberMap.setItem("lucas", 5);
numberMap.printMap();
console.log(numberMap.getItem("diego"));
numberMap.clear();
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem("uno", "1");
stringMap.setItem("dos", "2");
console.log(stringMap.getItem("dos"));
stringMap.printMap();
