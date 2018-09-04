import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import ParentService = require("../app/business/parent.service");
import IParent = require("../app/model/interfaces/parent.interface");



class ParentController implements IBaseController <ParentService> {
    
    create(req: express.Request, res: express.Response): void {
            try {
                                   
                var parent: IParent = <IParent>req.body;
                var parentService = new ParentService();
                parentService.create(parent, (error, result) => {
                    if(error) res.send({"error": error});
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
             var spartan: IStudent = <IStudent>req.body;
             var _id: string = req.params._id;
             var spartanBusiness = new StudentService();
                spartanBusiness.update(_id, spartan, (error, result) => {
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
             var parentService = new ParentService();
                parentService.delete(_id, (error, result) => {
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
              
             var parentService = new ParentService();
                parentService.retrieve((error, result) => {
                    if(error) res.send({"error": error});
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

             var parentService = new ParentService();
                parentService.findById(_id, (error, result) => {
                    if(error) res.send({"error": error});
                    else res.send(result);
                });   
            }
            catch (e)  {
                console.log(e);
                res.send({"error": "error in your request"});
                
            }
    }
    
        
}
export =ParentController;