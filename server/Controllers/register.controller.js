const user = require('../Models/user')
const argon2 = require('argon2')

// @route POST /register
// @desc Register user
// @access Public

const registerController = async (req,res) =>{
    req.body = {
        "username": "DThanh",
        "password": "DThanh"
    }
    const {username,password} = req.body
    if(!username || !password)
    return res.status(400).json({succes: false, message: "Tai khoan hoac mat khau khong chinh xac"})
    try {
        const User = await user.findOne({username})
        if(User)
        return res.status(400).json({succes: false, message: "Tai khoan da ton tai"})
        const HashPassworld = await argon2.hash(password)
        const newUser = new user({username,HashPassworld})
        await newUser.save()
    } catch (error) {
        
    }
}

module.exports = registerController