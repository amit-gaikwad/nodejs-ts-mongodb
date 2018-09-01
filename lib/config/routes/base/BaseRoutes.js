var express = require("express");
var HeroRoutes = require("./../HeroRoutes");
var SpartanRoutes = require("./../SpartanRoutes");
var EventRoutes = require("./../event.routes");

// { StudentRoutes } from "../student.routes";
var app = express();

var BaseRoutes = (function () {
    function BaseRoutes() {
    }
    Object.defineProperty(BaseRoutes.prototype, "routes", {
        get: function () {
            app.use("/", new HeroRoutes().routes);
            app.use("/", new SpartanRoutes().routes);
            app.use("/", new EventRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
})();
module.exports = BaseRoutes;
