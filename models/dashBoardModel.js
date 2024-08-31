const mongoose = require('mongoose')


const dashBoardSchema = new mongoose.Schema({
    walletBalance:{
        type:String,
        required:true
    }

})

const DashBoard = mongoose.model('Dashboard', dashBoardSchema)
module.exports =DashBoard