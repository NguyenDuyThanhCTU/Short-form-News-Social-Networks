const mongoose = require('mongoose')

const ViewSchema = mongoose.Schema({
  watchedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: 'Profile',
    },
  ],

  news: {type: mongoose.Schema.Types.ObjectId, ref: 'News'},
})

const LikeSchema = mongoose.Schema({
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: 'Profile',
    },
  ],

  news: {type: mongoose.Schema.Types.ObjectId, ref: 'News'},
})

const CommentSchema = mongoose.Schema({
  comment_list: [
    {
      commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        default: null,
        ref: 'Profile',
      },
      timestamp_cmt: {type: Date, default: Date.now()},
      body: {type: String},
      reply_list: [
        {
          replyBy: {
            type: mongoose.Schema.Types.ObjectId,
            default: null,
            ref: 'Profile',
          },
          timestamp_reply: {type: Date, default: Date.now()},
          detail_reply: {type: String},
        },
      ],
    },
  ],
  news: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'News',
  },
})

const View = mongoose.model('View', ViewSchema)
const Like = mongoose.model('Like', LikeSchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = {View, Like, Comment}
