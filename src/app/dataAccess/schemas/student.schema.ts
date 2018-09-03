import DataAccess = require("./../../dataAccess/DataAccess");
import IStudent = require("../../model/interfaces/student.interface");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class StudentSchema {
    
    static get schema() {
        var schema = new mongoose.Schema({
            rollno: {
               type: Number,
               required: true
           },
           name: {
               type: String,
               required: true
           },
           age: {
               type: Number,
               required: true
           },
           gender: {
            type: String,
            required: true
        } ,

        classteacher_id: {
            type: String,
            required: true
        },        	

        });
        
        return schema;
    }
}
var schema = mongooseConnection.model<IStudent>("Student", StudentSchema.schema);
export = schema;
