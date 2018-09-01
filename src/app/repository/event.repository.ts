import EventSchema = require("./../dataAccess/schemas/student.schema");
import RepositoryBase = require("./base/RepositoryBase");
import IEvent = require("../model/interfaces/ievent");

class EventRepository  extends RepositoryBase<IEvent> {
    constructor () {
        super(EventSchema);
    }    
}

Object.seal(EventRepository);
export = EventRepository;