import StudentSchema = require("./../dataAccess/schemas/student.schema");
import RepositoryBase = require("./base/RepositoryBase");
import IStudent = require("../model/interfaces/student.interface");

class StudentRepository  extends RepositoryBase<IStudent> {
    constructor () {
        super(StudentSchema);
    }    
}

Object.seal(StudentRepository);
export = StudentRepository;