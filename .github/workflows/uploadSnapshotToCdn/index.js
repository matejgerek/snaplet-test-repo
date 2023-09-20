const fs = require('fs')

const cdnRequest = async (url, {
  method= 'GET',
  headers= {
    'Content-Type': 'application/json'
  },
  body
} = {}) => {
  const fetchResult = await fetch(url, {
    method: method,
    headers: {
      AccessKey: process.env.BUNNY_CDN_CI_ARCHIVE_API_KEY,
      ...headers,
    },
    body: body,
  })
  const response = await fetchResult.json()
  if (!fetchResult.ok) {
    throw new Error(
      `Failed to ${method} ${url}. Response: ${JSON.stringify(response)}`
    )
  }
  return response
}

const uploadFile = async (localFilePath) => {
  const fileStream = fs.createReadStream(localFilePath)
  const cdnFilePath = localFilePath.split(`${ARTIFACTS_DIRECTORY}/`)[1]
  const url = `${BUNNY_CDN_STORAGE_URL}/${cdnFilePath}`
  const response = await cdnRequest(url, {
    method: 'PUT',
    body: fileStream,
    headers: {
      'Content-Type': 'application/octet-stream',
    }
  })
  console.log(
    `Uploaded ${cdnFilePath} to BunnyCDN. Response: ${JSON.stringify(response)}`
  )
  return response
}

const main = async () => {
  console.log('uploading')
}

main()
