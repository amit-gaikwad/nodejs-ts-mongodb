import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import NoticeService = require("../app/business/notice.service");
import INotice = require("../app/model/interfaces/inotice");



class NoticeController implements IBaseController <NoticeService> {
    
    create(req: express.Request, res: express.Response): void {
            try {
                                   
                var spartan: INotice = <INotice>req.body;
                var spartanBusiness = new NoticeService();
                spartanBusiness.create(spartan, (error, result) => {
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
             var spartanBusiness = new NoticeService();
                spartanBusiness.delete(_id, (error, result) => {
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
              
             var spartanBusiness = new NoticeService();
                spartanBusiness.retrieve((error, result) => {
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

             var spartanBusiness = new NoticeService();
                spartanBusiness.findById(_id, (error, result) => {
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
export =NoticeController;