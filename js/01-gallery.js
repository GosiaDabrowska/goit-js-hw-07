import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);
galleryContainer.insertAdjacentHTML("beforeend", createGallery);

function createGallery(item) {
return galleryItems.map(({previev, oryginal, description}) = {
    return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${original.value}">
    <img class = "gallery__image"
    src = "${previev}"
    data-source = "${original}"
    alt = "${description}"
    />
    </a>
    </div>`
})
} 

galleryContainer.addEventListener("click" (ev) => {
    ev.preventDefault();
    const lgImg = ev.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${lgImg}" width="800" height="600">
`)

instance.show()    
})