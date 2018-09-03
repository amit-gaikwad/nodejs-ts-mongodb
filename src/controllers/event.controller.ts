import express = require("express");
import IBaseController = require("./interfaces/base/BaseController");
import EventService = require("../app/business/event.service");
import IEvent = require("../app/model/interfaces/IEvent");



class EventController implements IBaseController <EventService> {
    
    create(req: express.Request, res: express.Response): void {
            try {
                                   
                var event: IEvent = <IEvent>req.body;     
                var eventService = new EventService();
                
                eventService.create(event, (error, result) => {
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
             var eventService = new EventService();
                eventService.delete(_id, (error, result) => {
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
              
             var eventService = new EventService();
                eventService.retrieve((error, result) => {
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

             var eventService = new EventService();
                eventService.findById(_id, (error, result) => {
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
export = EventController;