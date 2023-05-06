const News = require('../Models/Post.model')
const {Profile} = require('../Models/User.model')
const {View, Like, Comment} = require('../Models/Interaction.model')
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

    // const newComment = new View({view_list:[{watchedBy:asf}],news:newpost._id})
    const newView = new View({
      view_list: [null],
      news: newpost._id,
    })
    const newComment = new Comment({
      comment_list: [
        {
          body: null,
          reply_list: [{detail_reply: null}],
        },
      ],
      news: newpost._id,
    })

    const newLike = new Like({
      like_list: [null],
      news: newpost._id,
    })

    newpost.profile = profile
    newpost.view = newView._id
    newpost.comment = newComment._id
    newpost.like = newLike._id

    await newpost.save()
    await newComment.save()
    await newLike.save()
    await newView.save()

    await Profile.findByIdAndUpdate(profile, {$push: {news: newpost._id}})

    res.status(200).json(newpost)
  } catch (err) {
    res.status(500).json({success: false, message: 'Internal Server Error'})
  }
}

postController.posts = async (req, res) => {
  try {
    const post = await News.aggregate([
      {
        $lookup: {
          from: 'profiles',
          localField: 'profile',
          foreignField: '_id',
          as: 'profile',
        },
      },
      {
        $unwind: '$profile',
      },
      {
        $lookup: {
          from: 'accounts',
          localField: 'profile.account',
          foreignField: '_id',
          as: 'profile.account',
        },
      },
      {
        $unwind: '$profile.account',
      },
      {
        $sample: {size: 10}, // số lượng document cần random
      },
    ])

    if (post) {
      res.status(200).json(post)
    } else {
      res.status(409).json('No posts found')
    }
  } catch (error) {
    res.status(500).json({success: false, message: 'Internal Server Error'})
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

postController.post = async (req, res) => {
  const postId = req.params.id
  try {
    const post = await News.findById(postId)
      .populate({
        path: 'profile',
        select: 'avatar name account view like comment',
        populate: {
          path: 'account',
          model: 'Account',
          select: 'username',
        },
      })
      .populate('view')
      .populate('like')
      .populate({
        path: 'comment',
        select: 'comment_list',
        populate: {
          path: 'comment_list.commentedBy',
          model: 'Profile',
          select: 'name avatar ',
        },
      })

    if (post) {
      res.status(200).json(post)
    } else {
      res.status(409).json({message: 'post not found'})
    }
  } catch (err) {
    console.error(err)
    return res.status(500).json({message: 'Server Error'})
  }
}

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
