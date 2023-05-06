const express = require('express')
const interactionController = require('../../Controllers/Interaction.controller')

const addcommentRoute = express.Router()
const updatecommentRoute = express.Router()
const deletecommentRoute = express.Router()

const addSubCommentRoute = express.Router()

const updateSubCommentRoute = express.Router()
const deleteSubCommentRoute = express.Router()

const LikeRoute = express.Router()
const unLikeRoute = express.Router()
const ViewRoute = express.Router()
const CommentRoute = express.Router()
const deleteCommentRoute = express.Router()
// addLikeRoute.post('/admin/add/Like', interactionController.addLike)
LikeRoute.post('/like/:id', interactionController.likepost)
// LikesRoute.get('/admin/Likes', interactionController.Likes)
// updateLike.put('/admin/update/Like/:id', interactionController.updateLike)
unLikeRoute.post('/unlike/:id', interactionController.unlikepost)

// addcommentRoute.post('/admin/add/comment', interactionController.addComment)
CommentRoute.post('/comment/:id', interactionController.commentpost)
// commentsRoute.get('/admin/comments', interactionController.comments)
// updatecommentRoute.put(
//   '/admin/update/comment/:id',
//   interactionController.updateComment
// )
// deleteCommentRoute.delete(
//   '/delete-comment/:id',
//   interactionController.deleteComment
// )
ViewRoute.post('/view/:id', interactionController.viewpost)
// addSubCommentRoute.post(
//   '/admin/add/subcomment',
//   interactionController.addSubComment
// )
// SubCommentRoute.get('/admin/subcomment/:id', interactionController.subcomment)
// SubCommentsRoute.get('/admin/subcomments', interactionController.subcomments)
// updateSubCommentRoute.put(
//   '/admin/update/subcomment/:id',
//   interactionController.updateSubComment
// )
// deleteSubCommentRoute.delete(
//   '/admin/delete/subcomment/:id',
//   interactionController.deleteSubComment
// )
module.exports = {
  LikeRoute,
  unLikeRoute,
  ViewRoute,
  CommentRoute,
  deleteCommentRoute,
}
