import express = require("express");
import GallaryController = require("../../controllers/gallary.controller");

var router = express.Router();
 class GallaryRoutes {
    private gallaryController: GallaryController;
    
    constructor () {
        this.gallaryController = new GallaryController();   
    }

    get routes () : express.Router {
        
        var controller = this.gallaryController;
        router.get("/gallary", controller.retrieve);
        router.post("/gallary", controller.create);
        router.put("/gallary/:_id", controller.update);
        router.get("/gallary/:_id", controller.findById);
        router.delete("/gallary/:_id", controller.delete);
       
        return router;
    }
     
    
}

Object.seal(GallaryRoutes);
export = GallaryRoutes;