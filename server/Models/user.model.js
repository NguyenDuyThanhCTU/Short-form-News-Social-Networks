const mongoose = require('mongoose')
const Schema = mongoose.Schema

const avt =
  'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w'

const AccountSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  profile:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
  timestamp_account: {
    type: Date,
    default: Date.now(),
  },
})



const ProfileSchema = new Schema({
  name: {
    type: String,
    default: function () {
      return this.username
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  
  avatar: {
    type: String,
    default: avt,
  },
  
  bio: {
    type: String,
    default: null,
  },

  account:{
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    unique: true,
    ref: 'Account'
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
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
  news: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'News',
    },
  ],
})

module.exports = mongoose.model('User', UserSchema)
