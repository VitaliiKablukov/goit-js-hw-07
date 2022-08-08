import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
console.log(gallery);

galleryItems.forEach((elem) => {
  const newElem = `<a class="gallery__item" href="${elem.original}">
  <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
</a>`;
  gallery.insertAdjacentHTML("beforeend", newElem);
});
const lightBoxGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
gallery.addEventListener("click", openModalWithNewPictures);
//
function openModalWithNewPictures(elem) {
  elem.preventDefault();
  lightBoxGallery.on("show.simplelightbox", function () {});
}
