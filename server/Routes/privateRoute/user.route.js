const express = require('express')
const middleware = require('../../Controllers/middleware')
const userController = require('../../Controllers/User.controller')

const profilesRoute = express.Router()
const profileRoute = express.Router()
const updateProfileRoute = express.Router()
const deleteProfileRoute = express.Router()

const updateToContentCreatorRoute = express.Router()

profileRoute.get('/profile/:id', userController.profile)

profilesRoute.get('/admin/show-user', userController.getAllUser)

updateProfileRoute.put(
  '/profile/update/:id',

  userController.updateProfile
)

deleteProfileRoute.delete(
  '/profile/delete/:id',

  userController.deleteUser
)

module.exports = {
  profilesRoute,
  profileRoute,
  updateProfileRoute,
  deleteProfileRoute,
}
