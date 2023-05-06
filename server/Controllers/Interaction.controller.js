const News = require('../Models/Post.model')
const {View, Like, Comment} = require('../Models/Interaction.model')
const interactionController = {}

interactionController.likepost = async (req, res) => {
  const postId = req.params.id
  const {profile} = req.body
  try {
    const post = await News.findById(postId).populate('like')
    const likeId = post.like._id.toString()

    await Like.findByIdAndUpdate(likeId, {
      $push: {likedBy: profile},
    })
    res.status(200).json({success: true, message: 'Like'})
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
}

interactionController.unlikepost = async (req, res) => {
  const postId = req.params.id
  const {profile} = req.body
  try {
    const post = await News.findById(postId).populate('like')
    const likeId = post.like._id.toString()

    await Like.findByIdAndUpdate(likeId, {
      $unset: {likedBy: profile},
    })
    res.status(200).json({success: true, message: 'unLike'})
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
}

interactionController.commentpost = async (req, res) => {
  const postId = req.params.id
  const {profile, body} = req.body
  try {
    const post = await News.findById(postId).populate('comment')
    const comment = post.comment._id.toString()

    await Comment.findByIdAndUpdate(comment, {
      $push: {comment_list: {commentedBy: profile, body: body}},
    })
    res.status(200).json({success: true, message: 'comment success'})
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
}

interactionController.viewpost = async (req, res) => {
  const postId = req.params.id
  const {profile} = req.body
  try {
    const post = await News.findById(postId).populate('like')
    const viewId = post.view._id.toString()

    await View.findByIdAndUpdate(viewId, {
      $push: {watchedBy: profile},
    })
    res.status(200).json({success: true, message: 'View'})
  } catch (error) {
    res.status(500).json({message: 'Server Error'})
  }
}
module.exports = interactionController
