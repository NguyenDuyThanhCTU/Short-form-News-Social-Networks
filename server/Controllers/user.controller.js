const user = require('../Models/User.model')
const userController = {}

// @route GET /admin/show-user
// @desc list all User
// @access Only Admin
userController.getAllUser = async (req, res) => {
  try {
    const getUser = await user.find()

    res.status(200).json(getUser)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

// @route GET /profile/:id
// @desc get Profile
// @access User
userController.getProfileUser = async (req, res) => {
  const userID = req.params.id
  try {
    const getUser = await user
      .findById(userID)
      .select('name avatar username bio')
      .populate('news', 'url view')

    res.status(200).json(getUser)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

// @route GET /profile/:id
// @desc get Profile
// @access User
userController.getDashboardUser = async (req, res) => {
  const userID = req.params.id
  try {
    const getUser = await user
      .findById(userID)
      .select('name avatar following follower block')
      .populate('news', 'view like title comment timestamp_video')

    res.status(200).json(getUser)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

// @route POST /profile/update
// @desc update Profile
// @access User
userController.updateUser = async (req, res) => {
  const userID = req.params.id
  const {avatar, name, bio} = req.body
  try {
    await user.findByIdAndUpdate(userID, {avatar, name, bio})

    res.status(200).json(`Update id ${userID} complete`)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

// @route POST /profile/delete/:id
// @desc delete Profile
// @access User & Admin
userController.deleteUser = async (req, res) => {
  const userID = req.params.id
  try {
    await user.findByIdAndDelete(userID)

    res.status(200).json(`delete id ${userID} success`)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

module.exports = userController
