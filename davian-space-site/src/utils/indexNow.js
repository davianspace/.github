/**
 * IndexNow API - Instant Indexing for Bing and other search engines
 * https://www.bing.com/indexnow
 * 
 * This utility allows you to notify search engines immediately when content changes
 * instead of waiting for them to crawl your site.
 * 
 * Support: Bing, Yandex, Seznam.cz, Naver, and more
 */

const INDEXNOW_ENDPOINTS = {
  bing: 'https://www.bing.com/indexnow',
  yandex: 'https://yandex.com/indexnow',
  seznam: 'https://search.seznam.cz/indexnow',
  naver: 'https://searchadvisor.naver.com/indexnow'
};

/**
 * Submit URL(s) to IndexNow
 * @param {string|string[]} urls - URL or array of URLs to submit
 * @param {string} host - Your website host (e.g., 'davian.space')
 * @param {string} key - Your IndexNow API key (generate at https://www.bing.com/indexnow)
 * @param {string} keyLocation - URL where your key file is hosted (optional)
 * @param {string} endpoint - Which search engine endpoint to use (default: 'bing')
 * @returns {Promise<Response>}
 */
export async function submitToIndexNow(urls, host, key, keyLocation = null, endpoint = 'bing') {
  // Convert single URL to array
  const urlList = Array.isArray(urls) ? urls : [urls];
  
  // Validate URLs
  const validUrls = urlList.filter(url => {
    try {
      new URL(url);
      return true;
    } catch {
      console.warn(`Invalid URL: ${url}`);
      return false;
    }
  });

  if (validUrls.length === 0) {
    throw new Error('No valid URLs provided');
  }

  // Prepare the payload
  const payload = {
    host,
    key,
    urlList: validUrls
  };

  // Add keyLocation if provided
  if (keyLocation) {
    payload.keyLocation = keyLocation;
  }

  // Get the endpoint URL
  const endpointUrl = INDEXNOW_ENDPOINTS[endpoint] || INDEXNOW_ENDPOINTS.bing;

  try {
    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      console.log(`✅ Successfully submitted ${validUrls.length} URL(s) to ${endpoint}`);
      return response;
    } else {
      console.error(`❌ IndexNow submission failed:`, response.status, response.statusText);
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
  } catch (error) {
    console.error('❌ IndexNow submission error:', error);
    throw error;
  }
}

/**
 * Submit a single URL change to multiple search engines
 * @param {string} url - The URL that changed
 * @param {string} host - Your website host
 * @param {string} key - Your IndexNow API key
 * @returns {Promise<Object>} Results from each search engine
 */
export async function submitToAllSearchEngines(url, host, key) {
  const engines = Object.keys(INDEXNOW_ENDPOINTS);
  const results = {};

  for (const engine of engines) {
    try {
      await submitToIndexNow(url, host, key, null, engine);
      results[engine] = { success: true };
    } catch (error) {
      results[engine] = { success: false, error: error.message };
    }
  }

  return results;
}

/**
 * Example usage:
 * 
 * // Generate your API key first:
 * // 1. Create a random string (UUID or 32+ char hex)
 * // 2. Create a text file named {key}.txt in your /public folder
 * // 3. Put the key inside the file
 * // 4. Make it accessible at https://davian.space/{key}.txt
 * 
 * const API_KEY = 'your-generated-key-here';
 * const HOST = 'davian.space';
 * 
 * // Submit when content changes
 * submitToIndexNow(
 *   'https://davian.space/',
 *   HOST,
 *   API_KEY
 * );
 * 
 * // Or submit multiple URLs
 * submitToIndexNow(
 *   [
 *     'https://davian.space/',
 *     'https://davian.space/#about',
 *     'https://davian.space/#apps'
 *   ],
 *   HOST,
 *   API_KEY
 * );
 */

export default submitToIndexNow;
