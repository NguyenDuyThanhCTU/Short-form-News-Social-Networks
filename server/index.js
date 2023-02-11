const express = require('express')
const dotenv = require('dotenv')
const {connectDB} = require('./configs/db.config')
const apiRouter = require('./Routes/Router')
const cors = require('cors')





dotenv.config()
connectDB()

const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())




apiRouter(app)
app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})