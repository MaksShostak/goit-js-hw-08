// Add imports above this line
// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryListRef = document.querySelector('.gallery');
const renderGallery = createGalleryMarkup(galleryItems);

function createGalleryMarkup(array) {
  return array
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
galleryListRef.insertAdjacentHTML('afterbegin', renderGallery);

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox');
