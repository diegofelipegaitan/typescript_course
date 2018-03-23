System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Circle;
    return {
        setters: [],
        execute: function () {
            Circle = (function () {
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
            exports_1("Circle", Circle);
        }
    };
});
