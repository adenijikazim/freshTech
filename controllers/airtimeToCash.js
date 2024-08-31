const Airtime = require("../models/airtimeToCashModel")

const fillInfo = async(req,res)=>{
    const {network, phoneNumber, amount, airtimeSharePin} = req.body
    if(!network || !phoneNumber || !amount || !airtimeSharePin){
        res.json('[please enter all details')
    }
    const convertAirTime = await Airtime.create(req.body)
    res.status(StatusCodes.CREATED).json({convertAirTime})

}


module.exports = fillInfo