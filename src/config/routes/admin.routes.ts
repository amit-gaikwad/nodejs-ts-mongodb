import express = require("express");
import AdminController = require("../../controllers/admin.controller");

var router = express.Router();
 class AdminRoutes {
    private adminController: AdminController;
    
    constructor () {
        this.adminController = new AdminController();   
    }

    get routes () : express.Router {
        
        var controller = this.adminController;
        router.get("/admin", controller.retrieve);
        router.post("/admin", controller.create);
        router.put("/admin/:_id", controller.update);
        router.get("/admin/:_id", controller.findById);
        router.delete("/admin/:_id", controller.delete);
       
        return router;
    }
     
    
}

Object.seal(AdminRoutes);
export = AdminRoutes;