const express = require('express')
const authController = require('../../Controllers/auth.controller')

const loginRoute = express.Router()
const signupRoute = express.Router()
const forgotpasswordRoute = express.Router()
const refreshToken = express.Router()

loginRoute.post('/login', authController.loginController)

signupRoute.post('/signup', authController.signupController)

forgotpasswordRoute.post(
  '/forgotpassword',
  authController.forgotPasswordController
)

refreshToken.post('/refreshtoken', authController.RefreshToken)

module.exports = {signupRoute, loginRoute, forgotpasswordRoute, refreshToken}
