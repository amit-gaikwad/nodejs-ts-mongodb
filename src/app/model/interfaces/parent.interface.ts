

import mongoose = require("mongoose");

interface IParent extends mongoose.Document {
    
    name:string;
    address:string;
    mobileno:number;
    email:string;
    student_ids:string[];	
    password:string;
    OTP:number;

    
}
export = IParent;

