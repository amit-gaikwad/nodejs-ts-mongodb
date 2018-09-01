import DataAccess = require("./../../dataAccess/DataAccess");
import INotice = require("../../model/interfaces/inotice");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class NoticeSchema {
    
    static get schema() {
        var schema = new mongoose.Schema({
            title: {
               type: String,
               required: true
           },
           description: {
               type: String,
               required: true
           },
           date: {
               type: Date,
               required: true
           },
           class: {
            type: String,
            required: true
        } ,

            	

        });
        
        return schema;
    }
}
var schema = mongooseConnection.model<INotice>("Student", NoticeSchema.schema);
export = schema;
