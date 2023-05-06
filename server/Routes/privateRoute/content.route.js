const express = require('express')
const contentController = require('../../Controllers/content.controller')

const AddTopicRoute = express.Router()
const TopicsRoute = express.Router()

const TopicRoute = express.Router()
const updateTopicRoute = express.Router()
const deleteTopicRoute = express.Router()

AddTopicRoute.post('/addtopic', (req, res) => {
  res.status(200).json('a')
})
TopicsRoute.get('/alltopic', contentController.GetTopic)

module.exports = {
  AddTopicRoute,
  TopicsRoute,
}
