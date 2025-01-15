import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('#loader'); 
const galleryContainer = document.querySelector('#gallery');
const API_KEY = '48131456-02178b54d24f02562d64ec2d5';

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', event => {
  event.preventDefault();
  galleryContainer.innerHTML = ''; 
  const query = event.currentTarget.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
      timeout: 3000,
    });
    galleryContainer.innerHTML = '';
    form.reset();
    return;
  }
loader.classList.remove('hidden');
  fetchImages(query, API_KEY)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 3000,
        });
        galleryContainer.innerHTML = '';
        form.reset();
        return;
      }
      const galleryMarkup = renderGallery(data.hits);
      galleryContainer.innerHTML = galleryMarkup;
      console.log(data);  
      lightbox.refresh();
    })
    .catch(err => {
      iziToast.error({
        message: `An error occurred: ${err.message}`,
        position: 'topRight',
        timeout: 3000,
      });
    })
   .finally(() => {
      loader.classList.add('hidden');
    });
});
