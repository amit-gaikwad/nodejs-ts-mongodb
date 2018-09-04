import mongoose = require("mongoose");

interface INotice extends mongoose.Document {
    
        title:string;
        description:string;
        date:Date;
        class:string;

    
}
export = INotice;
