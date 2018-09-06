import DataAccess = require("./../../dataAccess/DataAccess");
import IGallery = require("../../model/interfaces/gallery.interface");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class GallerySchema {
    
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
var schema = mongooseConnection.model<IGallery>("Gallery", GallerySchema.schema);
export = schema;
