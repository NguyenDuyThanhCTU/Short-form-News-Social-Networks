const user = require('../Models/user.model')
const Role = require('../Models/role.model')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const authController = {}

generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.SecretKey,
    {
      expiresIn: '30d',
    }
  )
}

refreshAccesToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    process.env.RefreshKey,
    {expiresIn: '365d'}
  )
}

// @route POST /register
// @desc Register user
// @access Public
authController.signupController = async (req, res) => {
  const GuestRole = '6424372247c111f38524aabc'
  const {username, password, email} = req.body

  try {
    const User = await user.findOne({username})
    const Email = await user.findOne({email})

    if (User || Email)
      return res.status(200).json({
        succes: false,
        message: 'Tai khoan hoac so dien thoai da ton tai',
      })

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    const newUser = new user({
      username,
      password: hashPassword,
      email,
      role: GuestRole,
    })
    const savedUser = await newUser.save()

    const newRole = Role.findById(GuestRole)
    await newRole.updateOne({$push: {user: savedUser._id}})

    return res.status(200).json(newUser)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

// @route POST /login
// @desc login
// @access Public
authController.loginController = async (req, res) => {
  const {username, password} = req.body

  try {
    const User = await user.findOne({username})
    const valdPassword = await bcrypt.compare(password, User.password)

    if (valdPassword) {
      const accessToken = generateAccessToken(User)
      const refreshToken = refreshAccesToken(User)
      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: false,
        path: '/',
        sameSite: 'strict',
      })
      if (User.username === 'Admin') {
        const {password, following, follower, block, news, ...others} =
          User._doc
        res.status(200).json({...others, accessToken, refreshToken})
      } else {
        const {password, ...others} = User._doc
        res.status(200).json({...others, accessToken, refreshToken})
      }
    } else
      return res.status(401).json({
        succes: false,
        messae: 'tai khoan hoac mat khau khong chinh xac',
      })
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

// @route POST /forgotpassword
// @desc forgot password
// @access Public
authController.forgotPasswordController = async (req, res) => {
  const email = req.body
  const emailDB = await user.findOne(email)
  if (emailDB) return res.status(200).json(emailDB.email)
  else {
    return res.status(400).json({succes: false, messae: 'SDT khong dung'})
  }
}

authController.RefreshToken = async (req, res) => {
  const RefreshToken = req.cookies.refreshToken
  if (!RefreshToken)
    return res.status(400).json({succes: false, message: 'Chua co token'})

  jwt.verify(RefreshToken, process.env.RefreshKey, (err, user) => {
    if (user) {
      const newAccessToken = generateAccessToken(RefreshToken)
      const newRefreshToken = refreshAccesToken(RefreshToken)
      res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: '/',
        sameSite: 'strict',
      })
      res.status(200).json({accessToken: newAccessToken})
    } else res.status(400).json({succes: false, messae: 'Token khong dung'})
  })
}

authController.topic = async (req, res) => {
  const {name, icon} = req.body

  try {
    const newTopic = new Topic({name, icon})
    await newTopic.save()

    return res.status(200).json(newTopic)
  } catch (error) {
    res.status(500).json({succes: false, message: 'Loi server'})
  }
}

module.exports = authController
