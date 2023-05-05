const mongoose = require('mongoose')

const RoleSchema = new mongoose.Schema({
  name: {type: String, require: true, unique: true},
  timestamp_role: {type: Date, default: Date.now()},
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'Profile',
    },
  ],
})
const Role = mongoose.model('Role', RoleSchema)
module.exports = {Role}
