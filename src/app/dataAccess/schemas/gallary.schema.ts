import DataAccess = require("./../../dataAccess/DataAccess");
import IGallary = require("../../model/interfaces/igallary");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class GallarySchema {
    
    static get schema() {
        var schema = new mongoose.Schema({
            img_url: {
               type: String,
               required: true
           },
           category: {
               type: String,
               required: true
           },
           isPrivate: {
               type: Boolean,
               required: true
           },
        });
        
        return schema;
    }
}
var schema = mongooseConnection.model<IGallary>("Gallary", GallarySchema.schema);
export = schema;
