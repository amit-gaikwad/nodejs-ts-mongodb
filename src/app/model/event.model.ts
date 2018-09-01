import IEvent = require("./interfaces/ievent");

 class EventModel {
   
   _eventModel: IEvent;
   
   constructor(event: IEvent) {
       this._eventModel = event;
   }
    
}
Object.seal(EventModel);

export= EventModel;