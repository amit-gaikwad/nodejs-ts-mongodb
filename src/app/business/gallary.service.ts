
//import ISpartanBusiness = require("./interfaces/SpartanBusiness");
import GallaryRepository = require("../repository/gallary.repository");
import IGallary = require("../model/interfaces/igallary");

class GallaryService  { //implements ISpartanBusiness {
    private _gallaryRepository: GallaryRepository;
    
    constructor () {
        this._gallaryRepository = new GallaryRepository();
    }  
        
    create (item: IGallary, callback: (error: any, result: any) => void) {
        this._gallaryRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._gallaryRepository.retrieve(callback);
    }
    
     update (_id: string, item: IGallary, callback: (error: any, result: any) => void) {
        /* this._studentRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            else 
                this._studentRepository.update(res._id, item, callback);
                
        });   */  
    }
     
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._gallaryRepository.delete(_id, callback);
    }
    
    findById (_id: string, callback: (error: any, result: IGallary) => void) {
        this._gallaryRepository.findById(_id, callback);
    }
    
}
Object.seal(GallaryService);
export = GallaryService;