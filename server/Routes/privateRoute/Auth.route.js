const express = require('express')
const AuthController = require('../../Controllers/Auth.controller')
// const middleware = require('../../Controllers/middleware')

const loginRoute = express.Router()
const logoutRoute = express.Router()
const signupRoute = express.Router()
const recoveryRoute = express.Router()
const accountsRoute = express.Router()
const searchAccountRoute = express.Router()
const accountRoute = express.Router()

loginRoute.post('/login', AuthController.loginController)

logoutRoute.get('/logout/:id', AuthController.logoutController)

signupRoute.post('/signup', AuthController.signupController)

recoveryRoute.post('/lostpassword', AuthController.recoveryController)

accountsRoute.get('/admin/accounts', AuthController.accounts)

searchAccountRoute.get('/account/search', AuthController.searchAccounts)

accountRoute.post('/account', AuthController.account)

module.exports = {
  signupRoute,
  loginRoute,
  logoutRoute,
  recoveryRoute,
  accountsRoute,
  searchAccountRoute,
  accountRoute,
}
