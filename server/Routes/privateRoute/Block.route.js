const express = require('express')
const blockController = require('../../Controllers/Block.controller')

//Level Route
const addBlockRoute = express.Router()
const blocksRoute = express.Router()
const unblock = express.Router()

//Warning Reason Route
const addReasonRoute = express.Router()
const ReasonRoute = express.Router()
const ReasonsRoute = express.Router()
const updateReasonRoute = express.Router()
const deleteReasonRoute = express.Router()

addBlockRoute.post('/block/:id', blockController.addBlock)
blocksRoute.get('/blocks/', blockController.blocks)
unblock.post('/block/:id', blockController.addBlock)

addReasonRoute.post('/admin/reasons-block', blockController.addReason)
ReasonRoute.get('/admin/reasons-block/:id', blockController.Reason)
ReasonsRoute.get('/admin/reasons-block', blockController.Reasons)
updateReasonRoute.patch(
  '/admin/reasons-block/:id',
  blockController.updateReason
)
deleteReasonRoute.delete(
  '/admin/reasons-block/:id',
  blockController.deleteReason
)

module.exports = {
  addBlockRoute,
  blocksRoute,
  unblock,
  addReasonRoute,
  ReasonRoute,
  ReasonsRoute,
  updateReasonRoute,
  deleteReasonRoute,
}
