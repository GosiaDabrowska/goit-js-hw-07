import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);

function createGalleryItem(image) {
    return `<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${image.previev}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>`
} 

const galleryString = galleryItems.map(createGalleryItem).join("")

galleryContainer.insertAdjacentHTML("afterbeing", galleryString);


galleryContainer.addEventListener("click", (ev) => {
    ev.preventDefault();
    const lgImg = ev.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${lgImg}" width="800" height="600">
`)

instance.show()    
})