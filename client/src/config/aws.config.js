import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.AccessKeyID,
  secretAccessKey: process.env.secretAccessKey,
  region: process.env.Region,
})

const s3 = new AWS.S3()

export default s3
