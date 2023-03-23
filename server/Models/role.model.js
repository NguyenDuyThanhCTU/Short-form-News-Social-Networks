const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  timestamp_role: {
    type: Date,
    default: Date.now(),
  },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
})

module.exports = mongoose.model('Role', RoleSchema)
