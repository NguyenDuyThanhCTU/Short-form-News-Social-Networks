const express = require('express')
const middleware = require('../../Controllers/middleware')
const userController = require('../../Controllers/user.controller')

const getAllUser = express.Router()
const getProfileUser = express.Router()
const updateUser = express.Router()
const deleteUser = express.Router()

getProfileUser.get(
  '/profile/:id',
  middleware.Verify,
  userController.getProfileUser
)

getAllUser.get(
  '/admin/show-user',
  middleware.VerifyAdmin,
  userController.getAllUser
)

updateUser.post(
  '/profile/update/:id',
  middleware.Verify,
  userController.updateUser
)

deleteUser.delete(
  '/profile/delete/:id',
  middleware.Verify,
  userController.deleteUser
)

module.exports = {getProfileUser, getAllUser, updateUser, deleteUser}
