const cdnRequest = async (url, {
  method= 'GET',
  headers= {
    'Content-Type': 'application/json',
    AccessKey: process.env.BUNNY_CDN_CI_ARCHIVE_API_KEY,
  },
  body
} = {}) => {
  const fetchResult = await fetch(url, {
    method,
    headers,
    body,
  })
  const response = await fetchResult.json()
  if (!fetchResult.ok) {
    throw new Error(
      `Failed to ${method} ${url}. Response: ${JSON.stringify(response)}`
    )
  }
  return response
}

module.exports = cdnRequest