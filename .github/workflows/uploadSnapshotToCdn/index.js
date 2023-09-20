const fs = require('fs');
const path = require("path");
const cdnRequest = require("../cdnRequest");

const SNAPSHOT_FILE_NAME = 'production_db_snapshot.tar.gz';
const BUNNY_CDN_STORAGE_ZONE_NAME = process.env.BUNNY_CDN_STORAGE_ZONE_NAME;
const BUNNY_CDN_STORAGE_URL = `https://storage.bunnycdn.com/${BUNNY_CDN_STORAGE_ZONE_NAME}`;
const ACCESS_KEY = process.env.BUNNY_CDN_DEV_API_KEY;

const uploadFile = async (localFilePath) => {
  const fileStream = fs.createReadStream(localFilePath);
  const url = `${BUNNY_CDN_STORAGE_URL}/db-snapshots/production_db_snapshot.tar.gz`;
  const response = await cdnRequest(url, {
    method: 'PUT',
    body: fileStream,
    headers: {
      AccessKey: ACCESS_KEY,
      'Content-Type': 'application/octet-stream',
    }
  });
  console.log(`Snapshot uploaded to BunnyCDN. Response: ${JSON.stringify(response)}`);
  return response;
}

const main = async () => {
  console.log('Finding snapshot file...')
  const snapshot = path.resolve(`./${SNAPSHOT_FILE_NAME}`)
  if (!fs.existsSync(snapshot)) {
    throw new Error(`Snapshot file not found at ${snapshot}`)
  }
  await uploadFile(snapshot)
  console.log('Uploading finished.')
}

main();
