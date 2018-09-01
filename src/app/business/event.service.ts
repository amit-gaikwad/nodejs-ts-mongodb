
//import ISpartanBusiness = require("./interfaces/SpartanBusiness");
import EventRepository = require("../repository/event.repository");
import IEvent = require("../model/interfaces/ievent");

class EventService  { //implements ISpartanBusiness {
    private _eventRepository: EventRepository;
    
    
    constructor () {
        this._eventRepository = new EventRepository();
    }  
        
    create (item: IEvent, callback: (error: any, result: any) => void) {
        this._eventRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._eventRepository.retrieve(callback);
    }
    
     update (_id: string, item: IEvent, callback: (error: any, result: any) => void) {
        /* this._studentRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            else 
                this._studentRepository.update(res._id, item, callback);
                
        });   */  
    }
     
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._eventRepository.delete(_id, callback);
    }
    
    findById (_id: string, callback: (error: any, result: IEvent) => void) {
        this._eventRepository.findById(_id, callback);
    }
    
}
Object.seal(EventService);
export = EventService;