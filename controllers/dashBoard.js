const DashBoard = require("../models/dashBoardModel")

/////////////////GET ALL USERS///////////
const getDashboard = async(req,res)=>{
    const dashboard = await DashBoard.find()
    res.status(StatusCodes.OK).json({
        message:"Dashboard fetched successfully",
        data:{dashboard}
        
    })
}


module.exports = getDashboard
