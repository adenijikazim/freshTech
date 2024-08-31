const Transaction = require("../models/transactionModel")
const {StatusCodes} = require('http-status-codes')

const createTransaction = async(req,res)=>{

    const {service,status,amount,totalAmount,paymentMethod} = req.body
    req.body.user = req.user.userId
    const newTransaction = await Transaction.create(req.body)
    res.status(StatusCodes.CREATED).json({message:newTransaction}) 
}

const getTransaction = async(req,res)=>{
    const transaction = await Transaction.find()
    res.status(StatusCodes.OK).json({message:transaction})
}

module.exports = {createTransaction,getTransaction}