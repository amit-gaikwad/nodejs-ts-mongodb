import ParentSchema = require("./../dataAccess/schemas/parent.schema");
import RepositoryBase = require("./base/RepositoryBase");
import IParent = require("../model/interfaces/parent.interface");

class ParentRepository  extends RepositoryBase<IParent> {
    constructor () {
        super(ParentSchema);
    }    

    authenticate(email : string, password : string, callback: (error: any, result: any) => void) {
        ParentSchema.findOne({email:email , password : password},callback);
   }
}

Object.seal(ParentRepository);
export = ParentRepository;