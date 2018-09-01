import express = require("express");
import NoticeController = require("../../controllers/notice.controller");

var router = express.Router();
 class NoticeRoutes {
    private noticeController: NoticeController;
    
    constructor () {
        this.noticeController = new NoticeController();   
    }

    get routes () : express.Router {
        
        var controller = this.noticeController;
        router.get("/notice", controller.retrieve);
        router.post("/notice", controller.create);
        router.put("/notice/:_id", controller.update);
        router.get("/notice/:_id", controller.findById);
        router.delete("/notice/:_id", controller.delete);
       
        return router;
    }
     
    
}

Object.seal(NoticeRoutes);
export = NoticeRoutes;