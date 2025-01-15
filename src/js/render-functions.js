export function renderGallery(images) {
  return images
    .map(
      img => `
      <a href="${img.largeImageURL}" class="gallery-link">
        <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        <ul class="image-info">
          <li>Likes <span>${img.likes}</span></li>
          <li>Views <span>${img.views}</span></li>
          <li>Comments <span>${img.comments}</span></li>
          <li>Downloads <span>${img.downloads}</span></li>
        </ul>
      </a>`
    )
    .join('');
}
