const AuthRoute = require('./publicRoute/auth.route')
const UserRoute = require('../Routes/privateRoute/User.route')
const PostRoute = require('../Routes/privateRoute/Post.route')
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

const publicRoute = (app) => {
  //Auth routes
  app.use(AuthRoute.loginRoute)
  app.use(AuthRoute.logoutRoute)
  app.use(AuthRoute.recoveryRoute)
  app.use(AuthRoute.signupRoute)
  app.use(AuthRoute.refreshToken)
}

const privateRoute = (app) => {
  //User routes
  app.use(UserRoute.getProfileUser)
  app.use(UserRoute.getAllUser)
  app.use(UserRoute.updateUser)
  app.use(UserRoute.deleteUser)

  //Content routes
  app.use(AllHashtagRoute)
  app.use(AddHashtagRoute)
  app.use(AddTopicRoute)
  app.use(AllTopicRoute)

  // Role
  app.use(getRoleRoute)
  app.use(newRoleRoute)
  app.use(addRoleRoute)

  //Post
  app.use(PostRoute.getAllPost)
  app.use(PostRoute.uploadPost)
  app.use(PostRoute.updatePost)
  app.use(PostRoute.deletePost)
  app.use(PostRoute.getPost)
}

module.exports = {publicRoute, privateRoute}
