// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const galleryList = galleryItems
  .map(image => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', galleryList);

galleryRef.addEventListener('click', openModal);

function openModal(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  var lightbox = new SimpleLightbox('.gallery a', {
    caption: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 500,
    preloading: true,
    spinner: false,
  });
}
