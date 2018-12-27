import express = require("express");
import SkillsController = require("../../controllers/skills.controller");

var router = express.Router();
 class SkillsRoutes {
    private skillsController: SkillsController;
    
    constructor () {
        this.skillsController = new SkillsController();   
    }

    get routes () : express.Router {
        
        var controller = this.skillsController;
        router.get("/skills", controller.retrieve);
        router.post("/skills", controller.create);
        router.put("/skills/:_id", controller.update);
        router.get("/skills/:_id", controller.findById);
        router.delete("/skills/:_id", controller.delete);
       
        return router;
    }
     
    
}

Object.seal(SkillsRoutes);
export = SkillsRoutes;