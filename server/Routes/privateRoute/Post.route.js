const express = require('express')
const PostController = require('../../Controllers/Post.controller')
const multer = require('multer')

const PostRoute = express.Router()

// const upload = multer({dest: 'uploads/'})

PostRoute.post('/upload', PostController.newPost)
// PostRoute.post('/upload', upload.single('file'), (req, res) => {
//   console.log('File uploaded successfully:', req.file)
//   res.status(200).send('File uploaded successfully!')
// })

module.exports = {PostRoute}
