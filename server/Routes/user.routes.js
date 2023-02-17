const express = require('express')
const middlewareController = require('../Controllers/middleware.controller')
const userController = require('../Controllers/user.controller')

const getAllUser = express.Router()


getAllUser.get('/getAllUser',middlewareController.VerifyAdminToken, userController.getAllUser)


module.exports = {getAllUser}