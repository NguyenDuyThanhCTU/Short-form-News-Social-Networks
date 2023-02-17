
const {loginRoute,registerRoute,forgotpasswordRoute,refreshToken} = require('./auth.routes')
const {getAllUser} = require('./user.routes')

const apiRouter = (app) =>{
    //Auth routes
    app.use(loginRoute)

    app.use(registerRoute)

    app.use(forgotpasswordRoute)

    app.use(refreshToken)

    //User routes
    app.use(getAllUser)
}


module.exports = apiRouter