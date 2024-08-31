const express = require('express')
const {authenticateUser} = require('../middleware/authenticate')
const { getUser,  getUserProfile } = require('../controllers/userController')
const userRouter = express.Router()

userRouter.get('/profile',authenticateUser, getUserProfile)

userRouter.get('/',authenticateUser,getUser)

module.exports = userRouter