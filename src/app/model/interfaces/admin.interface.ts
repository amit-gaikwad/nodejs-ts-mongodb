import mongoose = require("mongoose");

interface IAdmin extends mongoose.Document {
    
        name:string;
        password:string;
        email:string;
        contactNo:number;
        OTP:number;

    
}
export = IAdmin;
