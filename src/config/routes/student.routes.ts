import express = require("express");
import StudentController = require("../../controllers/student.controller");

var router = express.Router();
 class StudentRoutes {
    private studentController: StudentController;
    
    constructor () {
        this.studentController = new StudentController();   
    }

    get routes () : express.Router {
        
        var controller = this.studentController;
        router.get("/students", controller.retrieve);
        router.post("/student", controller.create);
        router.put("/student/:_id", controller.update);
        router.get("/student/:_id", controller.findById);
        router.delete("/student/:_id", controller.delete);
       
        return router;
    }
     
    
}

Object.seal(StudentRoutes);
export = StudentRoutes;