const {Topic} = require('../Models/content.model')
const contentController = {}

contentController.AddTopic = async (req, res) => {
  const {name} = req.body
  console.log(name)
  // try {
  //   const newTopic = new Topic({name})
  //   await newTopic.save()

  //   return res.status(200).json(newTopic)
  // } catch (error) {
  //   res.status(500).json({succes: false, message: 'Loi server'})
  // }
}

contentController.GetTopic = async (req, res) => {
  try {
    const TopicData = await Topic.find({})
    const data = TopicData.map((TopicData) => TopicData.toObject())
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

module.exports = contentController
