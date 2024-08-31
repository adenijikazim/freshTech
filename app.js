require('dotenv').config()
const express = require('express')
const app = express()
require("async-error-handler")
const connectDB = require('./server')
const cookieParser = require('cookie-parser');

const morgan = require('morgan')
const CustomError = require('./utils/customError')
const authRouter = require('./routes/authRoutes')
const globalErrorhandler = require('./controllers/globalErrorHandler')
const transactionRouter = require('./routes/transactionRoutes')
const userRouter = require('./routes/userRoutes')
const router = require('./routes/airtimeToCashRoutes')

// app.use(globalErrorhandler)
app.use(globalErrorhandler)
app.use(express.json())
app.use(cookieParser())
app.use(morgan('tiny'))

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/transaction', transactionRouter)
app.use('/api/v1/user', userRouter)
app.use('/airtimeToCash', router)

app.all('*',(req,res,next)=>{
    const err = new CustomError(`Cant find ${req.originalUrl} on the server`, 404)
    next(err)
})

connectDB()

const PORT = 3000
app.listen(PORT, console.log(`app is listening on port ${PORT}`))