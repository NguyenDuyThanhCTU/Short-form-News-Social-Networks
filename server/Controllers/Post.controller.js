const News = require('../Models/News.model')
const User = require('../Models/User.model')
const PostController = {}

//1. lưu img và video vào S3 AWS theo format: user_id/news_id
//2. lấy url sau khi lưu trữ -> lưu vào news mongoDB
//3. trong thông tin lưu vào news mongoDB có cả user_id
//4. trong userSchema Sẽ tự thêm ObjectID news

PostController.newPost = async (req, res) => {
  const {
    user,
    title,
    introduction,
    body,
    hashtag,
    conclusion,
    image,
    video,
    option,
    caption,
    topic,
  } = req.body

  try {
    const newPost = new News({
      user,
      title,
      introduction,
      body,
      hashtag,
      conclusion,
      image,
      url: video,
      option,
      caption,
      topic,
    })
    const savedPost = await newPost.save()

    const newUser = User.findById(user)
    await newUser.updateOne({$push: {news: savedPost._id}})

    res.status(200).json(newPost._id)
    console.log(newPost)
  } catch (err) {
    res.status(500).json({success: false, message: 'loi server'})
  }
}

PostController.getAllPost = async (req, res) => {
  try {
    const post = await News.find().populate('user', 'username avatar name')
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Server error'})
  }
}

PostController.updatePost = async (req, res) => {
  const postId = req.params.id
  const {url, image} = req.body

  try {
    const post = await News.findByIdAndUpdate(postId, {url, image}, {new: true})

    if (!post) {
      return res.status(404).json({message: 'Post not found'})
    }

    return res.status(200).json({post})
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: 'Server Error'})
  }
}

PostController.getPost = async (req, res) => {
  const postId = req.params.id
  try {
    const post = await News.findById(postId).populate(
      'user',
      'username avatar name'
    )
    res.status(200).json(post)
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: 'Server Error'})
  }
}

PostController.deletePost = async (req, res) => {
  const postId = req.params.id
  try {
    await News.findByIdAndDelete(postId)
    res.status(200).json(`delete Post ${postId} success`)
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: 'Server Error'})
  }
}

module.exports = PostController
