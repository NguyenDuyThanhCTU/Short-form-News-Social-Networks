const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const defaultWarning = ''

const WarningSchema = mongoose.Schema({
  level: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'Level',
  },
  timestamp_warning: {
    type: Date,
    default: Date.now(),
  },
  warningReason: [
    {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'WarningReason',
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'Profile',
  },
})

const LevelSchema = mongoose.Schema({
  level: {
    type: Number,
    require: true,
    unique: true,
  },
  describe: {
    type: String,
    require: true,
  },
  timestamp_level: {
    type: Date,
    default: Date.now(),
  },
  warning_list: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Warning',
      },
    },
  ],
})

const WarningReasonSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  timestamp_level: {
    type: Date,
    default: Date.now(),
  },
})

const Warning = mongoose.model('Warning', WarningSchema)
const Level = mongoose.model('Level', LevelSchema)
const WarningReason = mongoose.model('WarningReason', WarningReasonSchema)

module.exports = {Warning, Level, WarningReason}
