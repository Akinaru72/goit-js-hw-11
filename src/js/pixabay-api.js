export function fetchImages(query, apiKey) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const queryString = new URLSearchParams(params).toString();
  const url = `${BASE_URL}?${queryString}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
}
