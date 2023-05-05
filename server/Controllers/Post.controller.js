const News = require('../Models/Post.model')
const {Profile} = require('../Models/User.model')
const postController = {}

//1. lưu img và video vào S3 AWS theo format: user_id/post_id
//2. lấy url sau khi lưu trữ -> lưu vào post mongoDB
//3. trong thông tin lưu vào post mongoDB có cả user_id
//4. trong userSchema Sẽ tự thêm ObjectID post

postController.addpost = async (req, res) => {
  const {profile, title, introduction, body, hashtag, footer, option, topic} =
    req.body

  try {
    const newpost = new News({
      title,
      introduction,
      body,
      hashtag,
      option,
      footer,
      topic,
    })
    newpost.profile = profile
    await newpost.save()
    await Profile.findByIdAndUpdate(profile, {$push: {news: newpost._id}})

    res.status(200).json(newpost)
  } catch (err) {
    res.status(500).json({success: false, message: 'loi server'})
  }
}

postController.posts = async (req, res) => {
  try {
    const post = await post.find().populate('profile', 'username avatar name')
    if (post) {
      res.status(200).json(post)
    } else {
      res.status(409).json('Null')
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Server error'})
  }
}

postController.updatepost = async (req, res) => {
  const postId = req.params.id
  const {video, image} = req.body

  try {
    const post = await News.findByIdAndUpdate(
      postId,
      {video, image},
      {new: true}
    )

    if (!post) {
      return res.status(404).json({message: 'post not found'})
    }

    return res.status(200).json(post)
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: 'Server Error'})
  }
}

// postController.post = async (req, res) => {
//   const postId = req.params.id
//   try {
//     const post = await post.findById(postId).populate(
//       'user',
//       'username avatar name'
//     )
//     res.status(200).json(post)
//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({message: 'Server Error'})
//   }
// }

// postController.deletepost = async (req, res) => {
//   const postId = req.params.id
//   try {
//     await post.findByIdAndDelete(postId)
//     res.status(200).json(`delete post ${postId} success`)
//   } catch (err) {
//     console.error(err)
//     return res.status(500).json({message: 'Server Error'})
//   }
// }

module.exports = postController
