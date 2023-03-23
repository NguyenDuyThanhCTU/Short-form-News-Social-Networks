const {
  loginRoute,
  signupRoute,
  forgotpasswordRoute,
  refreshToken,
} = require('./publicRoute/auth.route')

const {getAllUser} = require('./privateRoute/user.route')

const {
  AllHashtagRoute,
  AddHashtagRoute,
} = require('./privateRoute/hashtag.route')

const {
  getRoleRoute,
  newRoleRoute,
  addRoleRoute,
} = require('./privateRoute/role.route')

const publicRoute = (app) => {
  //Auth routes
  app.use(loginRoute)

  app.use(signupRoute)

  app.use(forgotpasswordRoute)

  app.use(refreshToken)
}
const privateRoute = (app) => {
  //HashTag routes
  app.use(AllHashtagRoute)
  app.use(AddHashtagRoute)

  //User routes
  app.use(getAllUser)
  // Role
  app.use(getRoleRoute)
  app.use(newRoleRoute)
  app.use(addRoleRoute)
}

module.exports = {publicRoute, privateRoute}
