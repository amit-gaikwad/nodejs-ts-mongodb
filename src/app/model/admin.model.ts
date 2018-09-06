import IAdmin = require("./interfaces/admin.interface");

 class AdminModel {
   
   _adminModel: IAdmin;
   
   constructor(admin: IAdmin) {
       this._adminModel = admin;
   }
    
}
Object.seal(AdminModel);

export= AdminModel;