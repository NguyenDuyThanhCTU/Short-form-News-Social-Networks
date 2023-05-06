const express = require('express')
const PostController = require('../../Controllers/Post.controller')

const addPostRoute = express.Router()
const PostsRoute = express.Router()
const PostRoute = express.Router()
const updatePostRoute = express.Router()
const deletePostRoute = express.Router()

const LikePostRoute = express.Router()
const CommentPostRoute = express.Router()

// const ExistingViewsPostRoute = express.Router()
// const ExistingLikePostRoute = express.Router()

// const commentsRoute = express.Router()
// const SubCommentsRoute = express.Router()
// const LikesRoute = express.Router()
// const ViewsRoute = express.Router()

addPostRoute.post('/post/upload/', PostController.addpost)
PostRoute.get('/post/:id', PostController.post)
PostsRoute.get('/posts', PostController.posts)
updatePostRoute.post('/post/update/:id', PostController.updatepost)
// deletePostRoute.delete('/post/delete/:id', PostController.deletePost)

// LikePostRoute.post('/post/like/:id', PostController.likePost)
// CommentPostRoute.post('/post/comment/:id', PostController.commentPost)

// ExistingViewsPostRoute.post('/post/like/:id', PostController.likePost)
// ExistingLikePostRoute.post('/post/comment/:id', PostController.commentPost)

module.exports = {
  addPostRoute,
  PostsRoute,
  PostRoute,
  updatePostRoute,
  // deletePostRoute,
  // LikePostRoute,
  // CommentPostRoute,
}
