const express = require('express')
const interactionController = require('../../Controllers/Warning.controller')

const addcommentRoute = express.Router()
const updatecommentRoute = express.Router()
const deletecommentRoute = express.Router()

const addSubCommentRoute = express.Router()

const updateSubCommentRoute = express.Router()
const deleteSubCommentRoute = express.Router()

const LikeRoute = express.Router()
const unLikeRoute = express.Router()

addLikeRoute.post('/admin/add/Like', interactionController.addLike)
LikeRoute.get('/admin/Like/:id', interactionController.Like)
LikesRoute.get('/admin/Likes', interactionController.Likes)
updateLike.put('/admin/update/Like/:id', interactionController.updateLike)
deleteLike.delete('/admin/delete/Like/:id', interactionController.deleteLike)

addcommentRoute.post('/admin/add/comment', interactionController.addComment)
commentRoute.get('/admin/comment/:id', interactionController.comment)
commentsRoute.get('/admin/comments', interactionController.comments)
updatecommentRoute.put(
  '/admin/update/comment/:id',
  interactionController.updateComment
)
deletecommentRoute.delete(
  '/admin/delete/comment/:id',
  interactionController.deleteComment
)

addSubCommentRoute.post(
  '/admin/add/subcomment',
  interactionController.addSubComment
)
SubCommentRoute.get('/admin/subcomment/:id', interactionController.subcomment)
SubCommentsRoute.get('/admin/subcomments', interactionController.subcomments)
updateSubCommentRoute.put(
  '/admin/update/subcomment/:id',
  interactionController.updateSubComment
)
deleteSubCommentRoute.delete(
  '/admin/delete/subcomment/:id',
  interactionController.deleteSubComment
)

module.exports = {
  addLikeRoute,
  LikeRoute,
  LikesRoute,
  updateLike,
  deleteLike,
  addcommentRoute,
  commentRoute,
  commentsRoute,
  updatecommentRoute,
  deletecommentRoute,
  addSubCommentRoute,
  SubCommentRoute,
  SubCommentsRoute,
  updateSubCommentRoute,
  deleteSubCommentRoute,
}
