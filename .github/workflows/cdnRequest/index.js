/**
 * Creates a curried function for making CDN requests to the specified URL.
 *
 * @param {string} accessKey - The access key for authentication.
 * @returns {function(string, object): Promise<any>} A curried function that accepts a URL and request options.
 */
const createCdnRequest = (accessKey) => async (url, {
  method = 'GET',
  /**
   * HTTP headers for the request.
   * @type {Object}
   * @property {string} [Content-Type='application/json'] - The content type of the request.
   * @property {string} [AccessKey] - The access key for authentication.
   */
  headers = {
    'Content-Type': 'application/json',
  },
  body
} = {}) => {
  /**
   * Make a CDN request to the specified URL.
   *
   * @param {string} url - The URL to make the CDN request to.
   * @param {object} options - An object containing request options.
   * @param {string} [options.method='GET'] - The HTTP method for the request (e.g., 'GET', 'POST', 'PUT').
   * @param {Object} [options.headers] - The HTTP headers for the request.
   * @param {string} [options.headers.Content-Type='application/json'] - The content type of the request.
   * @param {string} [options.headers.AccessKey] - The access key for authentication.
   * @param {any} [options.body] - The request body data (e.g., JSON data, FormData).
   * @returns {Promise<any>} A Promise that resolves with the JSON response from the CDN.
   * @throws {Error} Throws an error if the CDN request is not successful (non-2xx status code).
   */
  const fetchResult = await fetch(url, {
    method,
    headers: {
      'AccessKey': accessKey,
      ...headers,
    },
    body,
  });

  const response = await fetchResult.json();

  if (!fetchResult.ok) {
    throw new Error(
      `Failed to ${method} ${url}. Response: ${JSON.stringify(response)}`
    );
  }

  return response;
};

module.exports = createCdnRequest;
