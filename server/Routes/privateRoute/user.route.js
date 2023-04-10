const express = require('express')
const middlewareController = require('../../Controllers/middleware.controller')
const userController = require('../../Controllers/user.controller')

const getAllUser = express.Router()

getAllUser.get(
  '/alluser',
  middlewareController.VerifyRole,
  userController.getAllUser
)

module.exports = {getAllUser}
