import DataAccess = require("./../../dataAccess/DataAccess");
import ISkill = require("../../model/interfaces/skills.interface");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class SkillsSchema {
    
    static get schema() {
        var schema = new mongoose.Schema({
            communication: {
               type: Number,
               required: true
           },
           creativity: {
               type: Number,
               required: true
           },
           groupactivity: {
               type: Number,
               required: true
           },
           phyicalactivity: {
            type: Number,
            required: true
        } ,
        educational: {
            type: Number,
            required: true
        } ,
        student_id: {
            type: String,
            required: true
        } ,
        assesmentdate: {
            type:Date,
            required: true
        },
        });
        
        return schema;
    }
}
var schema = mongooseConnection.model<ISkill>("Skills", SkillsSchema.schema);
export = schema;
