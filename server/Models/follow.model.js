const mongoose = require('mongoose')

const FollowerSchema = mongoose.Schema({
  follower_list: [
    {
      timestamp_follower: {
        type: Date,
        default: Date.now(),
      },
      followerBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

const FollowingSchema = mongoose.Schema({
  following_list: [
    {
      timestamp_following: {
        type: Date,
        default: Date.now(),
      },
      following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

const Following = mongoose.model('Following', FollowingSchema)
const Follower = mongoose.model('Follower', FollowerSchema)

module.exports = {Following, Follower}
