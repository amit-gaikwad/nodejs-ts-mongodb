import express = require("express");
import HeroRoutes = require("./../HeroRoutes");
import SpartanRoutes = require("./../SpartanRoutes");
import StudentRoutes = require("./../student.routes");
// { StudentRoutes } from "../student.routes";
var app = express();

class BaseRoutes {

    get routes() {
        app.use("/", new HeroRoutes().routes);
        app.use("/", new SpartanRoutes().routes);
        app.use("/", new StudentRoutes().routes); 
        return app;
    }
}
export = BaseRoutes;