import mongoose from "mongoose";
const {Schema} = mongoose;

const user = new Schema({
    bookId:{
        type:String,
        require:true,
        unique:true
    },
    bookTitle:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true,
    },
    contact:{
        type:Number,
        require:true,
    },
    borrowDate:{
        type:Date,
        default: Date.now
    },
    returnDate:{
        type:Date,
        require:true
    },
    billAmount:{
        type:Number
    },
});
export const userSchema=mongoose.model("userSchema",user);