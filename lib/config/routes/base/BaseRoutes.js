var express = require("express");
var HeroRoutes = require("./../HeroRoutes");
var SpartanRoutes = require("./../SpartanRoutes");
var StudentRoutes = require("./../student.routes");
var GallaryRoutes = require("./../gallary.routes");
var app = express();

var BaseRoutes = (function () {
    function BaseRoutes() {
    }
    Object.defineProperty(BaseRoutes.prototype, "routes", {
        get: function () {
            app.use("/", new HeroRoutes().routes);
            app.use("/", new SpartanRoutes().routes);
            app.use("/", new StudentRoutes().routes);
            app.use("/", new GallaryRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
})();
module.exports = BaseRoutes;
