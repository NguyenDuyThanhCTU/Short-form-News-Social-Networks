const mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  news_list: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      url: {
        type: String,
        require: true,
      },
      timestamp_video: {
        type: Date,
        default: Date.now(),
      },
      hashtag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hashtag',
      },
      view: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'View',
      },
      like: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like',
      },
      comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    },
  ],
})

const News = mongoose.model('News', NewsSchema)

module.exports = {News}
