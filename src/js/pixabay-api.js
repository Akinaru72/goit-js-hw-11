import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '48131456-02178b54d24f02562d64ec2d5';

export const getImagesByQuery = query => {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
};
