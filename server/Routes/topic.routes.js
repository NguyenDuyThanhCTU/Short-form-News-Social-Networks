const express = require('express')
const topicController = require('../Controllers/topic.controller')

const addTopicRoute = express.Router()
const allTopicRoute = express.Router()
addTopicRoute.post('/addTopic', topicController.Addtopic)
allTopicRoute.get('/allTopic', topicController.getTopic)

module.exports = {addTopicRoute, allTopicRoute}
