const express = require('express')
const roleController = require('../../Controllers/role.controller')

const addRoleRoute = express.Router()
const roleRoute = express.Router()
const rolesRoute = express.Router()
const updateRoleRoute = express.Router()
const deleteRoleRoute = express.Router()

addRoleRoute.post('/admmin/add/role', roleController.newRole)
roleRoute.get('/admin/role/:name', roleController.getRole)
rolesRoute.get('/admin/roles/', roleController.getRole)
updateRoleRoute.post('/update/role', roleController.addRole)
deleteRoleRoute.delete('/admin/delete/role/:id')

module.exports = {
  addRoleRoute,
  roleRoute,
  updateRoleRoute,
  updateRoleRoute,
  deleteRoleRoute,
}
