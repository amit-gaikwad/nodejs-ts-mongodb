import express = require("express");
import NoticeRoutes = require("./../notice.routes")
import StudentRoutes = require("./../student.routes");
import GalleryRoutes = require("./../gallery.routes");
import EventRoutes = require("./../event.routes");
import ParentRoutes = require("./../parent.routes");
var app = express();

class BaseRoutes {

    get routes() {
        
        app.use("/", new StudentRoutes().routes); 
        app.use("/", new GalleryRoutes().routes ); 
        app.use("/", new EventRoutes().routes);
        app.use("/", new  NoticeRoutes().routes);
        app.use("/", new ParentRoutes().routes);
        return app;
    }
}
export = BaseRoutes;