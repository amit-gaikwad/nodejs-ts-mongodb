import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import StudentService = require("../app/business/student.service");
import IStudent = require("../app/model/interfaces/student.interface");



class StudentController implements IBaseController <StudentService> {
    
    create(req: express.Request, res: express.Response): void {
            try {
                                   
                var student: IStudent = <IStudent>req.body;
                var studentService = new StudentService();
                studentService.create(student, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});
            }
    }
    update(req: express.Request, res: express.Response): void {
/*         try {
             var student: IStudent = <IStudent>req.body;
             var _id: string = req.params._id;
             var studentService = new StudentService();
                studentService.update(_id, student, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});
                
            }
 */    }
    delete(req: express.Request, res: express.Response): void {
        try {
                
             var _id: string = req.params._id;
             var studentService = new StudentService();
                studentService.delete(_id, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send({"success": "success"});
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});
                
            }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {
              
             var studentService = new StudentService();
                studentService.retrieve((error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send(result);
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});
                
            }
    }
    findById(req: express.Request, res: express.Response): void {
        try {
             
             var _id: string = req.params._id;

             var studentService = new StudentService();
                studentService.findById(_id, (error, result) => {
                    if(error) res.send({"error": "error"});
                    else res.send(result);
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});
                
            }
    }
    
        
}
export =StudentController;