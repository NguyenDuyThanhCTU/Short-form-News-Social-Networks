import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  region: process.env.region,
})

const s3 = new AWS.S3()

export const HandleUpload = (Bucket, Key, Body, ContentType) => {
  return new Promise((resolve, reject) => {
    s3.upload(
      {
        Bucket: Bucket,
        Key: Key,
        Body: Body,
        ACL: 'public-read',
        ContentType: ContentType,
      },
      (err, data) => {
        if (err) {
          console.error(err)
          reject(err)
        } else {
          const Data = data.Location
          resolve(Data)
        }
      }
    )
  })
}

export const deleteFile = (Bucket, Key) => {
  return new Promise((resolve, reject) => {
    s3.deleteObject(
      {
        Bucket: Bucket,
        Key: Key,
      },
      (err, data) => {
        if (err) {
          console.error(err)
          reject(err)
        } else {
          resolve(data)
        }
      }
    )
  })
}
