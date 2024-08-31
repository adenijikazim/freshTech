const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    service:{
        type:string,
        enum:['MTN Airtime VTU', 'Airtel Airtime VTU'],
        required:true

    },
    amount:{
        type:Number,
        required:true

    },
    totalAmount:{
        type:Number,
        required:true

    },
    tranactionNo:{
        type:string,
        required:true


    },
    status:{
        type:string,
        enum:['failed','succesful','initiated']

    },
    paymentMethod:{
        type:string,
        enum:['card Payment','Tranfer','wallet'],
        required:true

    }


},{timestamps:true})

const transaction = mongoose.model('Transaction', transactionSchema)
module.exports = transaction
