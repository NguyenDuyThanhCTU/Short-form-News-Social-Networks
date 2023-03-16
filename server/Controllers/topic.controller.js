const Topic = require('../Models/topics')
const topicController = {}

topicController.Addtopic = async (req, res) => {
  const {name, icon} = req.body

  try {
    const newTopic = new Topic({name, icon})
    await newTopic.save()

    return res.status(200).json(newTopic)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

topicController.getTopic = async (req, res) => {
  try {
    const TopicData = await Topic.find({})
    return res.status(200).json(TopicData)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

module.exports = topicController
