import AdminSchema = require("./../dataAccess/schemas/admin.schema");
import RepositoryBase = require("./base/RepositoryBase");
import IAdmin = require("../model/interfaces/admin.interface");

class AdminRepository  extends RepositoryBase<IAdmin>{
    constructor () {
        super(AdminSchema);
    }    

    authenticate(email : string, password : string, callback: (error: any, result: any) => void) {
        AdminSchema.findOne({email:email , password : password},callback);
   }
}

Object.seal(AdminRepository);
export = AdminRepository;