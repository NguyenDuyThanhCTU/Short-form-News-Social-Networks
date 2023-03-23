const express = require('express')
const roleController = require('../../Controllers/role.controller')

const newRoleRoute = express.Router()
const addRoleRoute = express.Router()
const getRoleRoute = express.Router()

newRoleRoute.post('/newrole', roleController.newRole)
getRoleRoute.get('/getrole/:name', roleController.getRole)
addRoleRoute.post('/addrole', roleController.addRole)

module.exports = {newRoleRoute, getRoleRoute, addRoleRoute}
