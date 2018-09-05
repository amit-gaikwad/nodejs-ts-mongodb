import express = require("express");
import ParentController = require("../../controllers/parent.controller");

var router = express.Router();
 class ParentRoutes {
    private parentController: ParentController;
    
    constructor () {
        this.parentController = new ParentController();   
    }

    get routes () : express.Router {
        
        var controller = this.parentController;
        router.get("/parent", controller.retrieve);
        router.post("/parent", controller.create);
        router.put("/parent/:_id", controller.update);
        router.get("/parent/:_id", controller.findById);
        router.delete("/parent/:_id", controller.delete);
       
        return router;
    }
     
    
}

Object.seal(ParentRoutes);
export = ParentRoutes;