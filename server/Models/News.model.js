const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsSchema = Schema({
  profile: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
  introduction: {type: String, require: false, unique: false},
  body: {type: String, require: false, unique: false},
  hashtag: {type: String, require: false, unique: false},
  conclusion: {type: String, require: false, unique: false},
  image: {type: String, require: false, unique: false},
  video: {type: String, require: true, unique: false},
  option: {type: Number, require: true, unique: false},
  title: {type: String, require: true, unique: false},
  timestamp_video: {type: Date, default: Date.now()},

  topic: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic'},

  view: [{type: mongoose.Schema.Types.ObjectId, ref: 'View'}],
  like: [{type: mongoose.Schema.Types.ObjectId, ref: 'Like'}],
  comment: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
})

module.exports = mongoose.model('News', NewsSchema)
