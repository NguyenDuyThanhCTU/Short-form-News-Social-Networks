const express = require('express')
const authController = require('../Controllers/auth.controller')

const loginRoute = express.Router()
const registerRoute = express.Router()
const forgotpasswordRoute = express.Router()
const refreshToken = express.Router()

loginRoute.post('/login', authController.loginController)

registerRoute.post('/register', authController.topic)

forgotpasswordRoute.post(
  '/forgotpassword',
  authController.forgotPasswordController
)

refreshToken.post('/refreshtoken', authController.RefreshToken)

module.exports = {registerRoute, loginRoute, forgotpasswordRoute, refreshToken}
