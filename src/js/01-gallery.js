// Add imports above this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
const galleryListRef = document.querySelector('.gallery');

const renderGallery = createGalleryMarkup(galleryItems);

function createGalleryMarkup(array) {
  return array
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image"  loading="lazy" data-src="${preview}"  alt="${description}" />
</a>`;
    })
    .join('');
}

galleryListRef.insertAdjacentHTML('afterbegin', renderGallery);
const galleryImgRef = document.querySelectorAll('.gallery__image');

const setSource = function () {
  galleryImgRef.forEach(img => {
    const source = img.dataset.src;
    img.src = source;
  });
};

const createLazyScript = () => {
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';

  script.setAttribute('crossorigin', 'anonymous');
  script.setAttribute('referrerpolicy', 'no-referrer');

  document.body.append(script);
};

if ('loading' in HTMLImageElement.prototype) {
  console.log('Атрибут loading підтримується!');
  setSource();
} else {
  console.log('Атрибут loading не підтримується!');
  createLazyScript();
}

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox');
