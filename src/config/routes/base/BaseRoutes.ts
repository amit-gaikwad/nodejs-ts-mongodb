import express = require("express");
import NoticeRoutes = require("./../notice.routes")
import StudentRoutes = require("./../student.routes");
import EventRoutes = require("./../event.routes");
var app = express();

class BaseRoutes {

    get routes() {
        
        app.use("/", new StudentRoutes().routes); 
        app.use("/", new EventRoutes().routes);
        app.use("/",new  NoticeRoutes().routes);
        return app;
    }
}
export = BaseRoutes;