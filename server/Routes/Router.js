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
  AddTopicRoute,
  AllTopicRoute,
} = require('./privateRoute/content.route')

const {
  getRoleRoute,
  newRoleRoute,
  addRoleRoute,
} = require('./privateRoute/role.route')

const {PostRoute} = require('./privateRoute/Post.route')

const publicRoute = (app) => {
  //Auth routes
  app.use(loginRoute)

  app.use(signupRoute)

  app.use(forgotpasswordRoute)

  app.use(refreshToken)
}

const privateRoute = (app) => {
  //Content routes
  app.use(AllHashtagRoute)
  app.use(AddHashtagRoute)
  app.use(AddTopicRoute)
  app.use(AllTopicRoute)

  //User routes
  app.use(getAllUser)
  // Role
  app.use(getRoleRoute)
  app.use(newRoleRoute)
  app.use(addRoleRoute)

  //Post
  app.use(PostRoute)
}

module.exports = {publicRoute, privateRoute}
