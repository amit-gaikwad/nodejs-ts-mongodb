/// <reference path="../../../../typings/tsd.d.ts" />

import mongoose = require("mongoose");

interface ISkills extends mongoose.Document {
    
        communication:number ; 
        creativity:number ; 
        groupactivity:number ; 
        phyicalactivity:number ; 
        educational:number ; 
        student_id:String ;  
        assesmentdate:Date ; 
       
    
}
export = ISkills;
