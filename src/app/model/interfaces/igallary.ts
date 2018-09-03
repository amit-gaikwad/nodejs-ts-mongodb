/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require("mongoose");

interface IGallary extends mongoose.Document {
        img_url:string;
        category:string;
        isPrivate:boolean;
    
    
}
export = IGallary;
