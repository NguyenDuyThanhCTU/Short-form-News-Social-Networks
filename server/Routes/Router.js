const {
  loginRoute,
  registerRoute,
  forgotpasswordRoute,
  refreshToken,
} = require('./auth.routes')
const {getAllUser} = require('./user.routes')
const {addTopicRoute, allTopicRoute} = require('./topic.routes')

const apiRouter = (app) => {
  //Auth routes
  app.use(loginRoute)

  app.use(registerRoute)

  app.use(forgotpasswordRoute)

  app.use(refreshToken)

  //User routes
  app.use(getAllUser)

  //Topic routes

  app.use(addTopicRoute)
  app.use(allTopicRoute)
}

module.exports = apiRouter
