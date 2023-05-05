const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const avt =
  'https://images.squarespace-cdn.com/content/v1/54b7b93ce4b0a3e130d5d232/1519987020970-8IQ7F6Z61LLBCX85A65S/icon.png?format=1000w'
const userRole = ObjectId('6424372247c111f38524aabc')
const warningLv = ObjectId('644f7064c677ed0684ffdb45')

const AccountSchema = new Schema({
  username: {type: String, require: true, unique: true},
  password: {type: String, require: true},
  timestamp_account: {type: Date, default: Date.now()},

  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },
  token: {
    default: null,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Token',
  },
})

const ProfileSchema = new Schema({
  name: {
    type: String,
    require: true,
    default: function () {
      const result = `user${this._id}`
      return result
    },
  },
  email: {type: String, require: true, unique: true},
  avatar: {type: String, default: avt},
  bio: {type: String, default: null},

  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  },

  role: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'Role',
    default: userRole,
  },

  following: {
    default: null,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Following',
  },

  follower: {
    default: null,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Follower',
  },

  block: {
    default: null,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Block',
  },

  warning: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Warning',
    default: warningLv,
  },
  lock: {
    type: Boolean,
    default: false,
  },

  news: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'News',
    },
  ],
})
const Profile = mongoose.model('Profile', ProfileSchema)
const Account = mongoose.model('Account', AccountSchema)
module.exports = {Profile, Account}
