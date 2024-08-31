const UserModel = require("../models/userModel")

//get user
const getUser = async(req,res,next)=>{
    const user = await UserModel.findById(req.params.userId).select('-password')
    if(!user)
    {
        const error = new Error(`No user found`)
        return next(error)
    }
    res.status(StatusCodes.OK).json(user)

}


// get userProfile
const getUserProfile = async(req,res)=>{
    const userProfile = await UserModel.find('balance referalCode')
    res.status(StatusCodes.OK).json({user:userProfile})
}


module.exports = {getUser, getUserProfile}
