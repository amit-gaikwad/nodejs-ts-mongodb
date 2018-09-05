import DataAccess = require("./../../dataAccess/DataAccess");
import IAdmin = require("../../model/interfaces/admin.interface");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class AdminSchema {
    
    static get schema() {
        var schema = new mongoose.Schema({
            name: {
               type: String,
               required: true
           },
           password: {
               type: String,
               required: true
           },
           email: {
               type: String,
               required: true
           },
           contactNo: {
            type: Number,
            required: true
        } ,
        OTP: {
            type: Number,
            required: true
        } 
        });
        
        return schema;
    }
}
var schema = mongooseConnection.model<IAdmin>("Admin", AdminSchema.schema);
export = schema;
