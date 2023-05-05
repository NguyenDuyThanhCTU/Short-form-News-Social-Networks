const mongoose = require('mongoose')

const LockSchema = mongoose.Schema({
  timestamp_Lock: {type: Date, default: Date.now()},
  lock_List: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
})

const Lock = mongoose.model('Lock', LockSchema)

module.exports = {Lock}
