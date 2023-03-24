const express = require('express')
const contentController = require('../../Controllers/content.controller')

const AddHashtagRoute = express.Router()
const AllHashtagRoute = express.Router()
const AddTopicRoute = express.Router()
const AllTopicRoute = express.Router()

AddHashtagRoute.post('/addhashtag', contentController.AddHashtag)
AllHashtagRoute.get('/allhashtag', contentController.GetHashtag)

AddTopicRoute.post('/addtopic', contentController.AddTopic)
AllTopicRoute.get('/alltopic', contentController.GetTopic)

module.exports = {
  AddTopicRoute,
  AllTopicRoute,
  AddHashtagRoute,
  AllHashtagRoute,
}
