const express = require('express')
const authController = require('../Controllers/auth.controller')

const loginRoute = express.Router()
const registerRoute = express.Router()
const forgotpasswordRoute = express.Router()

loginRoute.post('/login',authController.loginController)

registerRoute.post("/register", authController.registerController)

forgotpasswordRoute.post("/forgotpassword",authController.forgotPasswordController)


module.exports = {registerRoute,loginRoute,forgotpasswordRoute}
