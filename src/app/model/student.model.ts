import IStudent = require("./interfaces/istudent");

 class StudentModel {
   
   _studentModel: IStudent;
   
   constructor(student: IStudent) {
       this._studentModel = student;
   }
    
}
Object.seal(StudentModel);

export= StudentModel;