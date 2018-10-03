import AdminRepository = require("../repository/admin.repository");
import IAdmin = require("../model/interfaces/admin.interface");

class AdminService  {
    private _adminRepository: AdminRepository;
    
    constructor () {
        this._adminRepository = new AdminRepository();
    }  

    authenticate(email : string, password : string, callback: (error: any, result: any) => void) {
        this._adminRepository.authenticate(email, password,(err, res) => {
            if(err || this.isEmpty(res)){
                err = {
                    "error" : "Invalid User",
                    "isAdmin" : "false",
                    "isLoggedIn" : "false"
                };
                callback(err, res);
            }
            else
            {
                res = {
                    "adminDetails" : {
                                "name"  : res.name,
                                "email"  : res.email,
                                "mobile"  : res.contactNo
                                },
                    "isAdmin" : "true",
                    "isLoggedIn" : "true"
                };
                callback(err, res);
            }
        } );
   }
        
    create (item: IAdmin, callback: (error: any, result: any) => void) {
        this._adminRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._adminRepository.retrieve(callback);
    }
    
     update (_id: string, item: IAdmin, callback: (error: any, result: any) => void) {
        /* this._studentRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            else 
                this._studentRepository.update(res._id, item, callback);
                
        });   */  
    }
     
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._adminRepository.delete(_id, callback);
    }
    
    findById (_id: string, callback: (error: any, result: IAdmin) => void) {
        this._adminRepository.findById(_id, callback);
    }
    

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
}
Object.seal(AdminService);
export = AdminService;