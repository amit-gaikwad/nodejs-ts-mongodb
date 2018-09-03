import express = require("express");
import EventRoutes = require("./../event.routes");
import StudentRoutes = require("./../student.routes");
var app = express();

class BaseRoutes {

    get routes() {
        app.use("/", new EventRoutes().routes);
        app.use("/", new StudentRoutes().routes); 
        return app;
    }
}
export = BaseRoutes;