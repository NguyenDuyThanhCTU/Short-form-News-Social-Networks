const {Profile, Account} = require('../Models/User.model')
const {Role} = require('../Models/role.model')
const {Token} = require('../Models/Token.model')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
const AuthController = {}

AccessToken = (user, getRole) => {
  return jwt.sign(
    {
      id: user.id,
      role: getRole.role,
    },
    process.env.SecretKey,
    {
      expiresIn: '365d',
    }
  )
}
SaveToken = async (token, account) => {
  try {
    const newToken = new Token({
      token: token,
      account: account._id,
    })
    await newToken.save()
    await Account.findOneAndUpdate({_id: account._id}, {token: newToken._id})
    return newToken
  } catch (error) {
    console.error('Error saving token:', error)
  }
}

checkUsername = async (username) => {
  const userCheck = await Account.findOne({username})
  if (userCheck) {
    return true
  } else {
    return false
  }
}

// @route POST /register
// @desc Create Account
// @access Public
AuthController.signupController = async (req, res) => {
  const {username, password, email} = req.body

  try {
    const existingAccount = await Account.findOne({username})
    const existingProfile = await Profile.findOne({email})

    if (existingAccount || existingProfile) {
      return res.status(409).json({
        success: false,
        message: 'Username or email already exist',
      })
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const newAccount = new Account({
      username,
      password: hashPassword,
    })

    const newProfile = new Profile({
      email,
      account: newAccount._id,
    })

    newAccount.profile = newProfile._id

    await newAccount.save()
    await newProfile.save()

    return res.status(200).json({
      success: true,
      message: 'Account created successfully',
      account: newAccount,
      profile: newProfile,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({success: false, message: 'Internal Server Error'})
  }
}

// @route POST /login
// @desc login
// @access Public
AuthController.loginController = async (req, res) => {
  const {username, password} = req.body

  const User = await Account.findOne({username}).populate('profile')

  if (User) {
    const valdPassword = await bcrypt.compare(password, User.password)
    if (valdPassword) {
      const getRole = await Profile.findById(User.profile)

      const accessToken = AccessToken(User, getRole)

      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: false,
        path: '/',
        sameSite: 'strict',
      })

      SaveToken(accessToken, User)
        .then((token) => {
          const {password, ...others} = User._doc
          res.status(200).json({account: {...others}, token: token._id})
        })
        .catch((error) =>
          res
            .status(500)
            .json({succes: false, message: 'Internal Server Error'})
        )
    } else {
      res.status(409).json({
        succes: false,
        messae: 'Username or password incorrect',
      })
    }
  } else {
    res.status(409).json({
      succes: false,
      messae: 'Username or password incorrect',
    })
  }
}

AuthController.account = async (req, res) => {
  const {username} = req.body

  try {
    const existingAccount = await Account.findOne({username})
    if (existingAccount) {
      res.status(200).json({
        succes: true,
        username: existingAccount,
      })
    } else {
      res.status(409).json({
        succes: false,
        messae: 'Username incorrect',
      })
    }
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}
// @route POST /lostpassword
// @desc GET Account(password)
// @access Public
AuthController.recoveryController = async (req, res) => {
  const {username, password} = req.body
  const salt = await bcrypt.genSalt(10)
  try {
    const userCheck = checkUsername(username)
    if (userCheck) {
      const passwordHashed = await bcrypt.hash(password, salt)
      await Account.findOneAndUpdate(
        {username: username},
        {password: passwordHashed}
      )
      res
        .status(200)
        .json({success: true, message: 'Password has been changed'})
    } else {
      res.status(404).json({success: false, message: 'Incorrect account'})
    }
  } catch (error) {
    res.status(500).json({succes: false, message: 'Internal Server Error'})
  }
}

AuthController.logoutController = async (req, res) => {
  const accountID = req.params
  try {
    res.clearCookie('accessToken')
    await Account.findByIdAndUpdate({_id: accountID.id}, {$set: {token: null}})
    await Token.findOneAndDelete({account: accountID.id})
    res.status(200).json('logout Success')
  } catch (error) {
    res.status(500).json({success: false, message: 'Internal Server Error'})
  }
}

AuthController.accounts = async (req, res) => {
  try {
    const accounts = await Account.find()
    res.status(200).json(accounts)
  } catch (error) {
    res.status(500).json({success: false, message: 'Internal Server Error'})
  }
}

AuthController.searchAccounts = async (req, res) => {
  const searchTerm = req.query.q

  try {
    const accounts = await Account.find({
      $or: [
        {name: {$regex: searchTerm, $options: 'i'}},
        {username: {$regex: searchTerm, $options: 'i'}},
      ],
    }).populate('profile')
    res.status(200).json(accounts)
  } catch (error) {
    res.status(500).json({success: false, message: 'Internal Server Error'})
  }
}

module.exports = AuthController
