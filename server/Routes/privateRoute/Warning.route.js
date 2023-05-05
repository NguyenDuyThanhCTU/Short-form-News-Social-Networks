const express = require('express')
const warningController = require('../../Controllers/Warning.controller')

//Level Route
const addLevelRoute = express.Router()
const levelRoute = express.Router()
const LevelsRoute = express.Router()
const updateLevel = express.Router()
const deleteLevel = express.Router()

//Warning Reason Route
const addReasonRoute = express.Router()
const ReasonRoute = express.Router()
const ReasonsRoute = express.Router()
const updateReasonRoute = express.Router()
const deleteReasonRoute = express.Router()

//Warning Route
const addWarningRoute = express.Router()
const WarningLv1Route = express.Router()
const WarningLv2Route = express.Router()
const WarningLv3Route = express.Router()
const WarningLv4Route = express.Router()
const SearchWarningRoute = express.Router()
const updateWarningRoute = express.Router()

addLevelRoute.post('/admin/add/level', warningController.addLevel)
levelRoute.get('/admin/level/:id', warningController.Level)
LevelsRoute.get('/admin/levels', warningController.Levels)
updateLevel.put('/admin/update/level/:id', warningController.updateLevel)
deleteLevel.delete('/admin/delete/level/:id', warningController.deleteLevel)

addReasonRoute.post('/admin/add/reason', warningController.addReason)
ReasonRoute.get('/admin/reason/:id', warningController.Reason)
ReasonsRoute.get('/admin/reasons', warningController.Reasons)
updateReasonRoute.put(
  '/admin/update/reason/:id',
  warningController.updateReason
)
deleteReasonRoute.delete(
  '/admin/delete/reason/:id',
  warningController.deleteReason
)

// addWarningRoute.post('/admin/add/warning', warningController.addWarning)
// WarningLv1Route.get('/admin/warning/level1', warningController.getWarningLevel1)
// WarningLv2Route.get('/admin/warning/level2', warningController.getWarningLevel2)
// WarningLv3Route.get('/admin/warning/level3', warningController.getWarningLevel3)
// WarningLv4Route.get('/admin/warning/level4', warningController.getWarningLevel4)
// SearchWarningRoute.post(
//   '/admin/warning/search',
//   warningController.searchWarning
// )
// updateWarningRoute.put('/admin/warning/:id', warningController.updateWarning)

module.exports = {
  addLevelRoute,
  levelRoute,
  LevelsRoute,
  updateLevel,
  deleteLevel,
  addReasonRoute,
  ReasonRoute,
  ReasonsRoute,
  updateReasonRoute,
  deleteReasonRoute,
  addWarningRoute,
  WarningLv1Route,
  WarningLv2Route,
  WarningLv3Route,
  WarningLv4Route,
  SearchWarningRoute,
  updateWarningRoute,
}
