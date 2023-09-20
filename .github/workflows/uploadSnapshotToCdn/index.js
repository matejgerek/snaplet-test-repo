const fs = require('fs')
const path = require("path");

const BUNNY_CDN_STORAGE_ZONE_NAME = process.env.BUNNY_CDN_STORAGE_ZONE_NAME
const BUNNY_CDN_STORAGE_URL = `https://storage.bunnycdn.com/${BUNNY_CDN_STORAGE_ZONE_NAME}`

const uploadFile = async (localFilePath) => {
  const fileStream = fs.createReadStream(localFilePath)
  const url = `${BUNNY_CDN_STORAGE_URL}/db-snapshots/production_db_snapshot.tar.gz`
  const response = await cdnRequest(url, {
    method: 'PUT',
    body: fileStream,
    headers: {
      AccessKey: process.env.BUNNY_CDN_CI_ARCHIVE_API_KEY,
      'Content-Type': 'application/octet-stream',
    }
  })
  console.log(
    `Snapshot uploaded to BunnyCDN. Response: ${JSON.stringify(response)}`
  )
  return response
}

const main = async () => {
  console.log('uploading')
  const directory = await fs.promises.readdir('./', { withFileTypes: true })
  const test = path.resolve('./production_db_snapshot.tar.gz')
  const response = await uploadFile(test)
  console.log(response)
}

main()
