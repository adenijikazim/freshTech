const express = required('express')


// LOGIN USER
const login = async(req,res,next)=>{
    const {email,password}=req.body
    const user = await User.findOne({email})
    if(!user){
        const error = new customError('Invalid login credentials', 401)
        return next(error)
    }

    const compare = user.comparePassword(password)
    if(!compare){
        const error = new customError('Incorrect email or password', 401)
        return next(error)
    }
        const token = signToken(user._id)
        const fourDays = 60*60*24*4*1000
        res.cookie('token',token, {
            httpOnly:true,
            // secure:true,
            expires:new Date(Date.now()+fourDays)
        })
    res.status(StatusCodes.OK).json({user:`${user.email} has logged in`})
}


const resetPassword = async(req,res)=>{
    const token = crypto.createHash('sha256').update(req.params.token).digest('hex')
    const user = await UserModel.findOne({passwordResetToken:token, passwordResetTokenExpires:{gt:Date.now()}})

    if(!user){
        const error = new customError('link is invlaid or has expired', 400)
        return next(error)
    }

    user.password = password
    user.confirmPassword = confirmPassword
    user.passwordResetToken = undefined
    user.passwordResetTokenExpires = undefined

    user.save()

    res.status(StatusCodes.OK).json({message:'password changed succefully'})


}

module.exports ={login,resetPassword}
