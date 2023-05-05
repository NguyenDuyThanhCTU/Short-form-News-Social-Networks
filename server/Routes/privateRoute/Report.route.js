const express = require('express')
const reportController = require('../../Controllers/report.controller')

// Report reason routes
const addReasonRoute = express.Router()
const ReasonRoute = express.Router()
const ReasonsRoute = express.Router()
const updateReasonRoute = express.Router()
const deleteReasonRoute = express.Router()

// Report routes
const addReportRoute = express.Router()

addReasonRoute.post('/admin/reasons-report', reportController.addReason)
ReasonRoute.get('/admin/reasons-report/:id', reportController.getReason)
ReasonsRoute.get('/admin/reasons-report', reportController.getReasons)
updateReasonRoute.patch(
  '/admin/reasons-report/:id',
  reportController.updateReason
)
deleteReasonRoute.delete(
  '/admin/reasons-report/:id',
  reportController.deleteReason
)

addReportRoute.post('/report/:id', reportController.addReport)

module.exports = {
  addReasonRoute,
  ReasonRoute,
  ReasonsRoute,
  updateReasonRoute,
  deleteReasonRoute,
  addReportRoute,
}
