const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    accountStatus:{
        type:string,
        enum:['active', 'Inactive'],
        default:Inactive

    },
    referalLink:true,

    email:{
        type:String,
        required:[true, 'please enter your email'],
        unique:true
    },

    balance:{
        type:Number,
        deafult:0

    },
    
    password:{
        type:String,
        required:[true, 'please enter your password'],
        minLength:3,
        maxLength:10
    }

})

const UserModel = mongoose.Model('User', userSchema)
module.exports = userModel