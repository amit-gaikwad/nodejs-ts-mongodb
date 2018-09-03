import IEvent = require("./interfaces/event.interface");

 class EventModel {
   
   _eventModel: IEvent;
   
   constructor(event: IEvent) {
       this._eventModel = event;
   }
    
}
Object.seal(EventModel);

export= EventModel;