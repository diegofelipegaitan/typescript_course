System.register(["./math/circle"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var circle_1, circle;
    return {
        setters: [
            function (circle_1_1) {
                circle_1 = circle_1_1;
            }
        ],
        execute: function () {
            circle = circle_1.Circle.getInstance();
            console.log(circle);
        }
    };
});
