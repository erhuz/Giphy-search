'use strict';

import queryString from 'query-string';

const buildURL = (query, apiKey, rating) => {
  const search = queryString.stringify({
    q      : query,
    api_key: apiKey,
    rating : rating
  })

  return `https://api.giphy.com/v1/gifs/search?${search}`;
}

const search = (query, apiKey, rating) => {
  const url = buildURL(query, apiKey, rating);

  return window.fetch(url)
  .then(res => res.json())
  .catch(console.error);
}

export default { search };
