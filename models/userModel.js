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

userSchema.pre('save', async function(){
    if(!this.isModified('password')) return
   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function(candidatePassword){
   return await bcrypt.compare(candidatePassword, this.password)}

const UserModel = mongoose.model("User", userSchema)
module.exports = UserModel