const express = require('express')
const PostController = require('../../Controllers/Post.controller')

const uploadPost = express.Router()
const getAllPost = express.Router()
const getPost = express.Router()
const updatePost = express.Router()
const deletePost = express.Router()

uploadPost.post('/post/upload/', PostController.newPost)
getPost.get('/post/:id', PostController.getPost)
getAllPost.get('/posts', PostController.getAllPost)
updatePost.post('/post/update/:id', PostController.updatePost)
deletePost.delete('/post/delete/:id', PostController.deletePost)

module.exports = {uploadPost, getAllPost, updatePost, deletePost, getPost}
