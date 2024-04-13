import { Message } from './User';
import mongoose ,{Schema , Document} from "mongoose";

export interface Message extends Document {
    content : String;
    createdAt : Date;
}


const MessageSchema :  Schema<Message> = new Schema({
    content : {
           type : String,
           required : true
    },
    createdAt : {
        type : Date ,
        required : true,
        default : Date.now,
    }
})

export interface User extends Document {
   userName : string;
   email : string;
   password : string;
   verifyCode : string;
   verifyCodeExpiry : Date;
   isAcceptingMessages : boolean;
   message : Message[];
}

const UserrSchema :  Schema<User> = new Schema({
    userName : {
           type : String,
           required : true,
           trim : true,
           
    },
    email : {
           type : String,
           required : [true, "Email is required"],
           trim : true,
           match : [/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, "please enter valid email address"],   
    },
    password : {
        type : String,
        required : [true, "password is required"]
    }
   
})