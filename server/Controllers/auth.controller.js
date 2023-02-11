const user = require('../Models/user')
const argon2 = require('argon2')

const authController ={}
// @route POST /register
// @desc Register user
// @access Public
authController.registerController = async (req,res) =>{
    const {username,password,email} = req.body
    if(username == "" || password =="")
    return res.status(400).json({succes: false, message: "Tai khoan hoac mat khau khong duoc de trong"})
    if(email == "")
    return res.status(400).json({succes: false, message: "Vui long nhap so dien thoai"})
    try {
        const User = await user.findOne({username})
        const Email = await user.findOne({email})
        if(User || Email)
        return res.status(400).json({succes: false, message: "Tai khoan hoac so dien thoai da ton tai"})

        const HashPassworld = await argon2.hash(password)
        const newUser = new user({username,password,email})
        await newUser.save()
        return res.status(200).json({succes: true, message: "Tao tai khoan thanh cong"})
    } catch (error) {
        res.status(500).json({succes: false, message: "Loi server"})
    }
}


// @route POST /login
// @desc login 
// @access Public
authController.loginController = async (req,res) =>{
    const {username,password} = req.body
    const usernameDB = await user.findOne({username})
    const passwordDB = await user.findOne({password})
    if(usernameDB && passwordDB)
      return res.status(200).json({succes: true,message: "login succesfully"})
    else if(username != usernameDB|| password !=passwordDB)
      return res.status(404).json({succes: false,messae:"tai khoan hoac mat khau khong chinh xac"})
}

// @route POST /forgotpassword
// @desc forgot password 
// @access Public
authController.forgotPasswordController = async (req,res) =>{
  const email = req.body
  const emailDB = await user.findOne(email)
  if(emailDB)
    return res.status(200).json(emailDB.email)
  else{
    return res.status(400).json({succes:false, messae:"SDT khong dung"})
  }
}
 


module.exports = authController