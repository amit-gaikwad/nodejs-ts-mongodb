import AdminSchema = require("./../dataAccess/schemas/admin.schema");
import RepositoryBase = require("./base/RepositoryBase");
import IAdmin = require("../model/interfaces/admin.interface");
import mongoose = require("mongoose");


class AdminRepository  extends RepositoryBase<IAdmin>{
   // private //model: mongoose.Model<mongoose.Document>;

    constructor () {
        super(AdminSchema);
        //his.model = AdminSchema;
    }    

    authenticate(email : string, password : string, callback: (error: any, result: any) => void) {
        AdminSchema.findOne({email:email , password : password},callback);
   }
    
}

Object.seal(AdminRepository);
export = AdminRepository;