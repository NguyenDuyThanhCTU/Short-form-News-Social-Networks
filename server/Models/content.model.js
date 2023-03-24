const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TopicSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  icon: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
})

const HashtagSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  amount: {
    type: Number,
    default: 0,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
})

const Topic = mongoose.model('Topic', TopicSchema)
const Hashtag = mongoose.model('Hashtag', HashtagSchema)
module.exports = {Topic, Hashtag}
