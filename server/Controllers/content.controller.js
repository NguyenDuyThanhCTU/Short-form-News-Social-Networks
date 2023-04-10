const {Hashtag, Topic} = require('../Models/content.model')
const contentController = {}

contentController.AddTopic = async (req, res) => {
  const {name, icon} = req.body

  try {
    const newTopic = new Topic({name, icon})
    await newTopic.save()

    return res.status(200).json(newTopic)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
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

contentController.AddHashtag = async (req, res) => {
  const {name, icon} = req.body

  try {
    const newHastag = new Hashtag({name, icon})
    await newHastag.save()

    return res.status(200).json(newHastag)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}
contentController.GetHashtag = async (req, res) => {
  try {
    const HashTagData = await Hashtag.find({}, 'name icon -_id')
    const data = HashTagData.map((TopicData) => TopicData.toObject()) // extract only the name field

    res.json(data)
    // res.status(200).json(TopicData)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

module.exports = contentController
