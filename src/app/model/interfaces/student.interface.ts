/// <reference path="../../../../typings/tsd.d.ts" />
import mongoose = require("mongoose");

interface IStudent extends mongoose.Document {
        rollno:number;
        name:string;
        age:number;
        gender:string;
        photourl : string;
        classteacher_id:string;	
    
}
export = IStudent;

