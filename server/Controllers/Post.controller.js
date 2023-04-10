// const AWS = require('aws-sdk')
const multer = require('multer')
const News = require('../Models/News.model')
const User = require('../Models/user.model')
const PostController = {}

//1. lưu img và video vào S3 AWS theo format: user_id/news_id
//2. lấy url sau khi lưu trữ -> lưu vào news mongoDB
//3. trong thông tin lưu vào news mongoDB có cả user_id
//4. trong userSchema Sẽ tự thêm ObjectID news

// const upload = multer({dest: 'uploads/'})

// PostController.newPost = (req, res) => {
//   upload.single('file')(req, res, (err) => {
//     if (err) {
//       console.error(err)
//       res.status(500).json({error: 'Failed to upload file'})
//     } else {
//       // console.log(req.file)
//       AWS.config.update({
//         accessKeyId: 'AKIAVYCUNYZ43BA2IF7I',
//         secretAccessKey: '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',
//         region: 'us-east-1',
//       })
//       const s3 = new AWS.S3()

//       const bucketName = process.env.BucketName

//       const Data = req.file

//       // const objectKey = `${data._id}/${data.id}`
//       const objectKey = 'video/test'
//       console.log(Data)
//       const params = {
//         Bucket: bucketName,
//         Key: objectKey,
//         Body: Data,
//         ContentType: Data.type,
//       }

//       s3.upload(params, (err, data) => {
//         if (err) {
//           console.error(err)
//           res.status(500).send(err)
//         } else {
//           console.log(
//             `Video uploaded successfully. File location: ${data.Location}`
//           )
//           res.status(200).send('Video uploaded successfully')
//         }
//       })

//       res.json({message: 'File uploaded successfully'})
//     }
//   })
// }
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

module.exports = PostController
