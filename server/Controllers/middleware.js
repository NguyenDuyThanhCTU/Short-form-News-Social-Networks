const jwt = require('jsonwebtoken')
const User = require('../Models/User.model')

const middleware = {}

middleware.Verify = async (req, res, next) => {
  const token = req.headers.token
  if (token) {
    const accessToken = token.split(' ')[1]
    if (accessToken) {
      jwt.verify(accessToken, process.env.SecretKey, (err, user) => {
        if (err)
          return res
            .status(403)
            .json({success: false, message: 'token da het han'})
        else req.user = user
        next()
      })
    }
  } else {
    return res.status(401).json({success: false, message: 'ban chua dang nhap'})
  }
}

middleware.VerifyContentCreator = (req, res, next) => {
  middleware.Verify(req, res, () => {
    if (req.user.contentCreator) next()
    else
      return res.status(403).json({
        success: false,
        message: 'ban khong phai la nguoi sang tao noi dung',
      })
  })
}

middleware.VerifyAdmin = (req, res, next) => {
  middleware.Verify(req, res, () => {
    const id = req.user.id

    User.findById(id)
      .populate('role')
      .exec(function (err, user) {
        const verify = user.role.name
        if (err) return handleError(err)

        if (!user || !user.role) {
          res.status(400).json({message: 'Bạn không phải là admin'})
        }
        if (verify === 'Admin') {
          next()
        }
      })
  })
}

module.exports = middleware
