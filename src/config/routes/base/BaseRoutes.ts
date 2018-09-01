import express = require("express");
import HeroRoutes = require("./../HeroRoutes");
import SpartanRoutes = require("./../SpartanRoutes");
import EventRoutes = require("./../event.routes");
// { StudentRoutes } from "../student.routes";
var app = express();

class BaseRoutes {

    get routes() {
        app.use("/", new HeroRoutes().routes);
        app.use("/", new SpartanRoutes().routes);
        app.use("/", new EventRoutes().routes); 
        return app;
    }
}
export = BaseRoutes;