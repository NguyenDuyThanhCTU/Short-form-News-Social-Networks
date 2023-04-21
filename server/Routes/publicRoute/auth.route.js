const express = require('express')
const AuthController = require('../../Controllers/Auth.controller')
const middleware = require('../../Controllers/middleware')
const loginRoute = express.Router()
const logoutRoute = express.Router()
const signupRoute = express.Router()
const recoveryRoute = express.Router()

const refreshToken = express.Router()

loginRoute.post('/login', AuthController.loginController)

logoutRoute.post('/logout', middleware.Verify, AuthController.logoutController)

signupRoute.post('/signup', AuthController.signupController)

recoveryRoute.post('/lostpassword', AuthController.recoveryController)

refreshToken.post('/refreshtoken', AuthController.RefreshToken)

module.exports = {
  signupRoute,
  loginRoute,
  logoutRoute,
  recoveryRoute,
  refreshToken,
}
