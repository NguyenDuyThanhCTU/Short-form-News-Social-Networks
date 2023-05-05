const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenSchema = Schema({
  token: {
    type: String,
    require: true,
    unique: true,
  },
  timestamp_token: {
    type: Date,
    default: Date.now(),
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  },
})
const Token = mongoose.model('Token', TokenSchema)
module.exports = {Token}
