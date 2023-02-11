
const {loginRoute,registerRoute,forgotpasswordRoute} = require('./auth.routes')


const apiRouter = (app) =>{

    app.use(loginRoute)

    app.use(registerRoute)

    app.use(forgotpasswordRoute)
}


module.exports = apiRouter