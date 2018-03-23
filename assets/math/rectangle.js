System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rectangle;
    return {
        setters: [],
        execute: function () {
            Rectangle = (function () {
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
            exports_1("Rectangle", Rectangle);
        }
    };
});
