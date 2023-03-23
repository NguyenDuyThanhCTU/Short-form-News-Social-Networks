const mongoose = require('mongoose')

const InteractiveSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'News',
  },
  view_list: [
    {
      watchedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      timestamp_view: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  like_list: [
    {
      likedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      timestamp_like: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  comment_list: [
    {
      commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      timestamp_cmt: {
        type: Date,
        default: Date.now(),
      },
      detail_cmt: {
        type: String,
      },
      reply_list: [
        {
          replyBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
          },
          timestamp_reply: {
            type: Date,
            default: Date.now(),
          },
          detail_reply: {
            type: String,
          },
        },
      ],
    },
  ],
})

module.exports = mongoose.model('Interaction', InteractiveSchema)
