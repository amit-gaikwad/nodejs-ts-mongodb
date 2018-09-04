import EventSchema = require("./../dataAccess/schemas/event.schma");
import RepositoryBase = require("./base/RepositoryBase");
import IEvent = require("../model/interfaces/event.interface");

class EventRepository  extends RepositoryBase<IEvent> {
    constructor () {
        super(EventSchema);
    }    
}

Object.seal(EventRepository);
export = EventRepository;