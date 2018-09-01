import DataAccess = require("./../../dataAccess/DataAccess");
import IEvent= require("../../model/interfaces/ievent");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class EventSchema {
    
    static get schema() {
        var schema = new mongoose.Schema({
            id:{
               type: Number,
               required: true
           },
           title: {
               type: String,
               required: true
           },
           date: {
               type:Date,
               required: true
           },
           description: {
            type: String,
            required: true
        } ,

        imgurl: {
            type: String,
            required: true
        },        	

        });
        
        return schema;
    }
}
var schema = mongooseConnection.model<IEvent>("Event", EventSchema.schema);
export = schema;
