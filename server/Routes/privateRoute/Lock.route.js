const express = require('express')
const LockController = require('../../Controllers/Lock.controller')

const LockProfileRoute = express.Router()
const unLockProfileRoute = express.Router()
const LocksRoute = express.Router()

//Lock Reason Route
const addReasonRoute = express.Router()
const ReasonRoute = express.Router()
const ReasonsRoute = express.Router()
const updateReasonRoute = express.Router()
const deleteReasonRoute = express.Router()

// LockProfileRoute.get('/admin/lock/:id', LockController.lockProfile)
// LocksRoute.get('/admin/locks', LockController.Locks)
// unLockProfileRoute.get('/admin/unlock/:id', LockController.unLockProfile)

// addReasonRoute.post('/admin/add/reason-lock', LockController.addReason)
// ReasonRoute.get('/admin/reason-lock/:id', LockController.Reason)
// ReasonsRoute.get('/admin/reasons-lock', LockController.Reasons)
// updateReasonRoute.put(
//   '/admin/update/reason-lock/:id',
//   LockController.updateReason
// )
// deleteReasonRoute.delete(
//   '/admin/delete/reason-lock/:id',
//   LockController.deleteReason
// )

module.exports = {
  LockProfileRoute,
  unLockProfileRoute,
  LocksRoute,
  addReasonRoute,
  ReasonRoute,
  ReasonsRoute,
  updateReasonRoute,
  deleteReasonRoute,
}
