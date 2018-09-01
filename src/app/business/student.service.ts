
//import ISpartanBusiness = require("./interfaces/SpartanBusiness");
import StudentRepository = require("../repository/student.repository");
import IStudent = require("../model/interfaces/istudent");

class StudentService  { //implements ISpartanBusiness {
    private _studentRepository: StudentRepository;
    
    constructor () {
        this._studentRepository = new StudentRepository();
    }  
        
    create (item: IStudent, callback: (error: any, result: any) => void) {
        this._studentRepository.create(item, callback);   
    }
   
    retrieve (callback: (error: any, result: any) => void) {
         this._studentRepository.retrieve(callback);
    }
    
     update (_id: string, item: IStudent, callback: (error: any, result: any) => void) {
        /* this._studentRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);
            else 
                this._studentRepository.update(res._id, item, callback);
                
        });   */  
    }
     
    delete (_id: string, callback:(error: any, result: any) => void) {
        this._studentRepository.delete(_id, callback);
    }
    
    findById (_id: string, callback: (error: any, result: IStudent) => void) {
        this._studentRepository.findById(_id, callback);
    }
    
}
Object.seal(StudentService);
export = StudentService;