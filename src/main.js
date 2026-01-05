import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchFormEl = document.querySelector('.form');

const showErrorToast = message => {
  iziToast.error({
    backgroundColor: '#ef4040',
    message,
    messageColor: 'black',
    messageSize: '20',
    position: 'topRight',
    displayMode: 2,
    close: true,
    timeout: 2000,
  });
};

hideLoader();

const onSearchFormSubmit = event => {
  event.preventDefault();
  clearGallery();
  const searchedQuery =
    event.currentTarget.elements['search-text'].value.trim();
  if (!searchedQuery) {
    showErrorToast('Field is empty, input again');
    return;
  }

  showLoader();
  getImagesByQuery(searchedQuery)
    .then(data => {
      if (data.hits.length === 0) {
        showErrorToast(
          'Sorry, there are no images matching <br>your search query. Please try again!'
        );
        clearGallery();
        searchFormEl.reset();
        return;
      }
      createGallery(data.hits);
      searchFormEl.reset();
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      hideLoader();
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
