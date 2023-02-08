const express = require('express')
const registerController = require('../Controllers/register.controller')

const registerRoute = express()



registerRoute.post("/", registerController)

module.exports = registerRoute
