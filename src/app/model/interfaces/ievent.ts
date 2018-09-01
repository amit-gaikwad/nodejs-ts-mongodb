import mongoose = require("mongoose");

interface IEvent extends mongoose.Document {
    
        title:string,
        description:string,
        date:Date,
        imgurl:string,	
    
}
export = IEvent;

