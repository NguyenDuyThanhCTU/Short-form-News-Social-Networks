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
  amount_use: {
    type: Number,
    default: 0,
  },
  timestamps_topic: {
    type: Date,
    default: Date.now(),
  },
})

const Topic = mongoose.model('Topic', TopicSchema)

module.exports = {Topic}
