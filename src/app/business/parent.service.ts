

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
    
}
Object.seal(ParentService);
export = ParentService;