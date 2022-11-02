import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const simpleLightbox = window.SimpleLightbox;

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}

const galleryRef = document.querySelector(".gallery");
const addGalleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("afterbegin", addGalleryMarkup);

const ligthbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
