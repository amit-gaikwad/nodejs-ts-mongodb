var express = require("express");
var NoticeRoutes = require("./../notice.routes");
var StudentRoutes = require("./../student.routes");
var EventRoutes = require("./../event.routes");
var app = express();

var BaseRoutes = (function () {
    function BaseRoutes() {
    }
    Object.defineProperty(BaseRoutes.prototype, "routes", {
        get: function () {
            app.use("/", new StudentRoutes().routes);
            app.use("/", new EventRoutes().routes);
            app.use("/", new NoticeRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return BaseRoutes;
})();
module.exports = BaseRoutes;
