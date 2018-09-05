import express = require("express");
import GalleryController = require("../../controllers/gallery.controller");

var router = express.Router();
 class GalleryRoutes {
    private galleryController: GalleryController;
    
    constructor () {
        this.galleryController = new GalleryController();   
    }

    get routes () : express.Router {
        
        var controller = this.galleryController;
        router.get("/gallery", controller.retrieve);
        router.post("/gallery", controller.create);
        router.put("/gallery/:_id", controller.update);
        router.get("/gallery/:_id", controller.findById);
        router.delete("/gallery/:_id", controller.delete);
       
        return router;
    }
     
    
}

Object.seal(GalleryRoutes);
export = GalleryRoutes;