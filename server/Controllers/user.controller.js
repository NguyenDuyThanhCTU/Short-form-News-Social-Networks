const user = require('../Models/user')
const userController ={}


userController.getAllUser = async (req,res) =>{
    try {
        const getUser = await user.find()
        res.status(200).json(getUser)
    } catch (error) {
        res.status(500).json({succes: false, message: "Loi server"})
    }
}

module.exports = userController