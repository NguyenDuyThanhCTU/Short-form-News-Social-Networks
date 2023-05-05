const express = require('express')
const dotenv = require('dotenv')
const {connectDB} = require('./configs/db.config')
const {publicRoute, privateRoute} = require('./Routes/Router')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT
const app = express()
app.use(cors())
dotenv.config()
connectDB()

app.use(express.json())
app.use(cookieParser())

publicRoute(app)
privateRoute(app)

app.use((req, res, next) => {
  res.set('Access-Control-Expose-Headers', 'ETag')
  next()
})
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`)
})
