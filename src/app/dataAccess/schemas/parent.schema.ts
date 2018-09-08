import DataAccess = require("./../../dataAccess/DataAccess");
import IParent = require("../../model/interfaces/parent.interface");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ParentSchema {
    
    static get schema() {
        var schema = new mongoose.Schema({
            name: {
               type: String,
               required: true
           },
           address: {
               type: String,
               required: true
           },
           mobileno: {
               type: Number,
               required: true
           },
           email: {
            type: String,
            required: true
        } ,
        student_ids: [{
            type: String,
            required: true
        }] ,
        password: {
            type: String,
            required: true
        } ,
        OTP: {
            type:Number,
            required: false
        } ,
            });
        return schema;
    }
}
var schema = mongooseConnection.model<IParent>("Parent", ParentSchema.schema);
export = schema;
