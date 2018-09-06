import ParentSchema = require("./../dataAccess/schemas/parent.schema");
import RepositoryBase = require("./base/RepositoryBase");
import IParent = require("../model/interfaces/parent.interface");

class ParentRepository  extends RepositoryBase<IParent> {
    constructor () {
        super(ParentSchema);
    }    
}

Object.seal(ParentRepository);
export = ParentRepository;