const express = require('express')
const dotenv = require('dotenv')
const {connectDB} = require('./configs/db.config')
const apiRouter = require('./Routes/Router')
const cors = require('cors')
const cookieParser = require('cookie-parser');





dotenv.config()
connectDB()

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser());



apiRouter(app)
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})