const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    createAt:{
        type: Date,
        default: Date.now()
    },
    admin:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('user',UserSchema)
