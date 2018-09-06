import AdminSchema = require("./../dataAccess/schemas/admin.schema");
import RepositoryBase = require("./base/RepositoryBase");
import IAdmin = require("../model/interfaces/admin.interface");

class AdminRepository  extends RepositoryBase<IAdmin> {
    constructor () {
        super(AdminSchema);
    }    
}

Object.seal(AdminRepository);
export = AdminRepository;