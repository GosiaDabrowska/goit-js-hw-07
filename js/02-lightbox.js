import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);

function createGalleryItem(image) {
    return `<li class="gallery__item">
    <a class="gallery__link" href="">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>`
} 

const galleryString = galleryItems.map(createGalleryItem).join("")

galleryContainer.insertAdjacentHTML("afterbegin", galleryString);

const lightbox = new SimpleLightbox(".gallery a",{
    captionsData: "alt",
    captionsDelay: 250,
});