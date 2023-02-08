const mongoose = require('mongoose')
const env = require('dotenv')
env.config()

mongoose.set('strictQuery', false); //
const connectDB = async () =>{
    try {
       await mongoose.connect(process.env.DB_URL,{
           useNewUrlParser: true,
            useUnifiedTopology: true
       })

       console.log("connect DB successful !!!")
    } catch (error) {
       console.log(error.message)
       process.exit(1)
    }
}
module.exports = { connectDB}