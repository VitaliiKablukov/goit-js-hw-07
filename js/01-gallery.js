import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

galleryItems.forEach((elem) => {
  const newElem = `<div class="gallery__item">
  <a class="gallery__link" href="${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
  </a>
</div>`;
  gallery.insertAdjacentHTML("beforeend", newElem);
});

gallery.addEventListener("click", openModalWithNewPictures);
//

function openModalWithNewPictures(elem) {
  elem.preventDefault();
  //
  window.addEventListener("keydown", closeModalWithNewPicturesEsc);
  //
  const elemTarget = elem.target;
  //
  const instance = basicLightbox.create(`
    <img src="${elemTarget.dataset.source}">`);
  //
  instance.show();
  //
  const backDropModal = document.querySelector(".basicLightbox");
  backDropModal.addEventListener("click", () => {
    window.removeEventListener("keydown", closeModalWithNewPicturesEsc);
  });
  //
  function closeModalWithNewPicturesEsc(event) {
    console.log(event.code);
    if (event.code === "Escape") {
      backDropModal.remove();
    }
  }
}
