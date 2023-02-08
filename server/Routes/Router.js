const express = require('express')
const router = express.Router()
const registerRoute = require('./register.router')

const apiRouter = (app) =>{
    
    router.use("/register",registerRoute)

    router.use("*",(req,res) =>{
        res.json({
            message: "this route is NOT DEFINED"
        })
    })
    return app.use('/',router)
}

module.exports = apiRouter