System.register(["./modules/functions"], function (exports_1, context_1) {
    "use strict";
    var functions;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (functions_1) {
                functions = functions_1;
            }
        ],
        execute: function () {
            exports_1("functions", functions);
            console.log("\n\n      /@-------------------------------------@\\");
            console.log("      |            Game.js           |");
            console.log("      \\@-------------------------------------@/");
        }
    };
});
