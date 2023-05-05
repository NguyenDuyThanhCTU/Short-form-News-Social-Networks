const {Lock} = require('../Models/Lock.model')
const {Profile} = require('../Models/User.model')
const lockController = {}

lockController.lockProfile = async (req, res) => {
  const profileId = req.params.id

  try {
    const profile = await Profile.findByIdAndUpdate(profileId, {lock: true})

    if (!profile) {
      return res.status(404).json({message: 'Profile not found'})
    }

    const lock = await Lock.findOneAndUpdate(
      {},
      {$addToSet: {lock_List: profile._id}},
      {upsert: true, new: true}
    )

    return res.status(200).json(lock)
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: 'Internal server error'})
  }
}

lockController.unLockProfile = async (req, res) => {
  const profileId = req.params.id

  try {
    const profile = await Profile.findByIdAndUpdate(profileId, {lock: false})

    if (!profile) {
      return res.status(404).json({message: 'Profile not found'})
    }

    const lock = await Lock.findOneAndUpdate(
      {},
      {$pull: {lock_List: profile._id}},
      {new: true}
    )

    return res.status(200).json(lock)
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: 'Internal server error'})
  }
}

module.exports = lockController
