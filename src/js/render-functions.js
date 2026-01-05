import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const gallarySLB = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

export const createGallery = images => {
  const galleryHTML = images
    .map(
      image =>
        `
        <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
              <img
                class="gallery-image"
                src="${image.webformatURL}"
                alt="${image.tags}"
              />
              <ul class="gallery-atributes">
                <li>Likes <span class="gallery-values">${image.likes}</span></li>
                <li>Views <span class="gallery-values">${image.views}</span></li>
                <li>Comments <span class="gallery-values">${image.comments}</span></li>
                <li>Downloads <span class="gallery-values">${image.downloads}</span></li>
              </ul>
            </a>
        </li>
      `
    )
    .join(' ');

  galleryListEl.innerHTML = galleryHTML;
  gallarySLB.refresh();
};

export const clearGallery = () => {
  galleryListEl.innerHTML = '';
};

export const showLoader = () => {
  loaderEl.classList.remove('hidden');
};

export const hideLoader = () => {
  loaderEl.classList.add('hidden');
};
