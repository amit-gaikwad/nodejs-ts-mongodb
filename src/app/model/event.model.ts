import IEvent = require("./interfaces/IEvent");

 class EventModel {
   
   _eventModel: IEvent;
   
   constructor(event: IEvent) {
       this._eventModel = event;
   }
    
}
Object.seal(EventModel);

export= EventModel;