/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require("mongoose");

interface IGallery extends mongoose.Document {
        img_url:string;
        category:string;
        isPrivate:boolean;
    
    
}
export = IGallery;
