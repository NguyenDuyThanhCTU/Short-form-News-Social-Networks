const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HashTagSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  icon: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
})

module.exports = mongoose.model('hashTag', HashTagSchema)
