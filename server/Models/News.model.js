const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsSchema = Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  title: {
    type: String,
  },

  introduction: {
    type: String,
  },

  body: {
    type: String,
  },

  hashtag: {
    type: String,
  },

  conclusion: {
    type: String,
  },

  image: {
    type: String,
  },

  url: {
    type: String,
    require: true,
  },

  option: {
    type: Number,
    require: true,
  },

  caption: {
    type: String,
    require: true,
  },

  timestamp_video: {
    type: Date,
    default: Date.now(),
  },

  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
  },

  view: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'View',
    },
  ],
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Like',
    },
  ],
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

module.exports = mongoose.model('News', NewsSchema)
