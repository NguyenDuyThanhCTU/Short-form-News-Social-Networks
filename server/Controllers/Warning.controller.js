const {WarningReason, Level, Warning} = require('../Models/Warning.model')
const {Profile} = require('../Models/User.model')
const warningController = {}

warningController.addLevel = async (req, res) => {
  const {level, describe} = req.body
  try {
    const existingLevel = await Level.findOne({level})
    const existingDescribe = await Level.findOne({describe})

    if (existingLevel || existingDescribe) {
      res.status(409).json({status: false, message: 'Level already exists'})
    } else {
      const newLevel = await new Level({
        level,
        describe,
      })
      newLevel.save()
      res.status(201).json('Level added successfully')
    }
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

warningController.Level = async (req, res) => {
  const levelID = req.params.id
  try {
    const level = await Level.findById(levelID)
    if (level) {
      res.status(200).json({success: true, level: level})
    } else {
      res.status(409).json({success: false, message: 'Level not found'})
    }
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

warningController.Levels = async (req, res) => {
  try {
    const levels = await Level.find()
    res.status(200).json(levels)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

warningController.updateLevel = async (req, res) => {
  try {
    const levelId = req.params.id
    const {describe} = req.body
    const level = await Level.findById(levelId)
    if (!level) {
      return res.status(404).json({message: 'Level not found'})
    }
    level.describe = describe
    await level.save()
    res.status(200).json({message: 'Level updated successfully'})
  } catch (err) {
    res.status(500).json({error: 'Server error'})
  }
}
warningController.deleteLevel = async (req, res) => {
  try {
    const {id} = req.params

    const deletedLevel = await Level.findByIdAndDelete(id)

    if (!deletedLevel) {
      return res.status(404).json({message: 'Level not found'})
    }

    return res
      .status(200)
      .json({message: 'Level deleted successfully', level: deletedLevel})
  } catch (error) {
    return res
      .status(500)
      .json({message: 'Something went wrong', error: error.message})
  }
}

warningController.addReason = async (req, res) => {
  try {
    const {name} = req.body

    const reason = new WarningReason({name})
    await reason.save()

    res.json({success: true, reason})
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

warningController.Reason = async (req, res) => {
  const idReason = req.params.id
  try {
    const reason = await WarningReason.findById(idReason)
    res.json({success: true, reason})
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

warningController.Reasons = async (req, res) => {
  try {
    const reasons = await WarningReason.find()
    res.send(reasons)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

warningController.updateReason = async (req, res) => {
  try {
    const updatedReason = await WarningReason.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    )

    if (!updatedReason) {
      return res.status(404).json({message: 'Reason not found'})
    }

    res.status(200).json(updatedReason)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}
warningController.deleteReason = async (req, res) => {
  try {
    const deletedReason = await WarningReason.findByIdAndDelete(req.params.id)

    if (!deletedReason) {
      return res.status(404).json({message: 'Reason not found'})
    }

    res.status(200).json({message: 'Reason deleted successfully'})
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

warningController.addWarning = async (req, res) => {
  const {levelId, reasonId, userId} = req.body

  try {
    const level = await Level.findById(levelId)
    const reason = await WarningReason.findById(reasonId)
    const user = await Profile.findById(userId)

    if (!level || !reason || !user) {
      return res.status(404).json({message: 'Level, reason or user not found'})
    }

    // const userLv = await Profile.findById(userId).populate({
    //   path: 'Warning',
    //   populate: {
    //     path: 'Level',
    //   },
    // })

    // if(user.level == levelId){

    // }
    const newWarning = await new Warning({
      level: levelId,
      warningReason: reasonId,
      user: userId,
    })
    await newWarning.save()

    user.warning = levelId
    await user.save()

    await Level.findOneAndUpdate(
      {_id: levelId},
      {$push: {user: newWarning._id}},
      {new: true}
    )

    res
      .status(201)
      .json({message: 'Warning created successfully', warning: level})
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

warningController.add1Warning = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

warningController.updateWarning = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

warningController.deleteWarning = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

module.exports = warningController
