import express = require("express");
import EventController = require("../../controllers/event.controller");

var router = express.Router();
 class EventRoutes {
    private eventController: EventController;
    
    constructor () {
        this.eventController = new EventController();   
    }

    get routes () : express.Router {
        
        var controller = this.eventController;
        router.get("/event", controller.retrieve);
        router.post("/event", controller.create);
        router.put("/event/:_id", controller.update);
        router.get("/event/:_id", controller.findById);
        router.delete("/event/:_id", controller.delete);
       
        return router;
    }
     
    
}

Object.seal(EventRoutes);
export = EventRoutes;