const Hashtag = require('../Models/hashtag.model')
const hashtagController = {}

hashtagController.AddHashtag = async (req, res) => {
  const {name, icon} = req.body

  try {
    const newHastag = new Hashtag({name, icon})
    await newHastag.save()

    return res.status(200).json(newHastag)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

hashtagController.GetHashtag = async (req, res) => {
  try {
    const HashTagData = await Hashtag.find({}, 'name icon -_id')
    const data = HashTagData.map((TopicData) => TopicData.toObject()) // extract only the name field

    res.json(data)
    // res.status(200).json(TopicData)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

module.exports = hashtagController
