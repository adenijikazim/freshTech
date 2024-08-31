const mongoose = require('mongoose')

const airtimeToCashSchema = new mongoose.Schema({
    network:{
        type:string,
        enum:['MTN', 'Airtel','Etisalat','Glo'],
        required:true

    },
    phoneNumber:{
        type:number,
        required:[true,'please enter your number']
    },
    amount:{
        type:number,
        required:true
    },
    airtimeSharePin:{
        type:number,
        required:true
    }

})

const Airtime = mongoose.model('airtime', airtimeToCashSchema)

module.exports = Airtime