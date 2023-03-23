const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  name: {
    type: String,
    default: function () {
      return this.username
    },
  },
  avatar: {
    type: String,
  },
  bio: {
    type: String,
  },
  timestamp_user: {
    type: Date,
    default: Date.now(),
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
    default: null,
  },
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      ref: 'Following',
    },
  ],
  follower: [
    {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      ref: 'Follower',
    },
  ],
  block: [
    {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
      ref: 'Block',
    },
  ],
  video: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video',
    },
  ],
})

module.exports = mongoose.model('User', UserSchema)
