import ParentRepository = require("../repository/parent.repository");
import IParent = require("../model/interfaces/parent.interface");

class ParentService  {
    private _parentRepository: ParentRepository;
    
    constructor () {
        this._parentRepository = new ParentRepository();
    }  
        
    create (item: IParent, callback: (error: any, result: any) => void) {
        this._parentRepository.create(item, callback);   
    }
    authenticate(email : string, password : string, callback: (error: any, result: any) => void) {
        this._parentRepository.authenticate(email, password,(err, res) => {
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
                    "parentDetails" : {
                                "name"  : res.name,
                                "email"  : res.email,
                                "mobile"  : res.mobileno,
                                "address" : res.address,
                                "student_ids" : res.student_ids
                                },
                    "isAdmin" : "false",
                    "isLoggedIn" : "true"
                };
                callback(err, res);
            }
        } );
   }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._parentRepository.retrieve(callback);
    }
    
     update (_id: string, item: IParent, callback: (error: any, result: any) => void) {
        /* this._studentRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            else 
                this._studentRepository.update(res._id, item, callback);
                
        });   */  
    }
     
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._parentRepository.delete(_id, callback);
    }
    
    findById (_id: string, callback: (error: any, result: IParent) => void) {
        this._parentRepository.findById(_id, callback);
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
}
Object.seal(ParentService);
export = ParentService;