import S3 from 'aws-sdk/clients/s3'
const s3 = new S3({
    apiVersion: '2006-03-01',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v4',
    region: process.env.AWS_REGION
  })

export default async function handler(req,res) {
  

  const post = await s3.createPresignedPost({
    Bucket: process.env.BUCKET_NAME_INSTA,
    Fields: {
      key: req.query.file,
      'Content-Type': req.query.fileType,
    },
    Expires: 60, // seconds
    Conditions: [
      ['content-length-range', 0, 25000000], // up to 25 MB
    ],
  } )


  res.status(200).json(post)
}