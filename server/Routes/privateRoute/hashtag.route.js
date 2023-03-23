const express = require('express')
const hashtagController = require('../../Controllers/hashtag.controller')

const AddHashtagRoute = express.Router()
const AllHashtagRoute = express.Router()
AddHashtagRoute.post('/addhashtag', hashtagController.AddHashtag)
AllHashtagRoute.get('/allhashtag', hashtagController.GetHashtag)

module.exports = {AddHashtagRoute, AllHashtagRoute}
