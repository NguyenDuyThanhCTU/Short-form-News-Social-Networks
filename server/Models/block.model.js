const mongoose = require('mongoose')

const ReasonBlockSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },
  timestamp_reason: {
    type: Date,
    default: Date.now(),
  },
  amount_use: {
    type: Number,
    default: 0,
  },
})

const BlockSchema = mongoose.Schema({
  block_list: [
    {
      blocked_reason: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ReasonBlock',
      },
      timestamp_block: {
        type: Date,
        default: Date.now(),
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],

  blockBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

const Reason = mongoose.model('ReasonBlock', ReasonBlockSchema)
const Block = mongoose.model('Block', BlockSchema)

module.exports = {Reason, Block}
