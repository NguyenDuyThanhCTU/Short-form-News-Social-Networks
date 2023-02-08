const express = require('express')
const dotenv = require('dotenv')
const {connectDB} = require('./configs/db.config')
const apiRouter = require('./Routes/Router')


dotenv.config()
connectDB()

const PORT = process.env.PORT
const app = express()

apiRouter(app)
app.use(express.json())




app.listen(PORT,()=>{
    console.log(`server is running on port: ${PORT}`)
})