import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
console.log(gallery);

galleryItems.forEach((elem) => {
  const newElem = `<li><img src="${elem.preview}" alt="${elem.description}"></img></li>`;
  gallery.insertAdjacentHTML("beforeend", newElem);
});

gallery.addEventListener("click", (elem) => {
  console.log(elem);
  const elemTargetSrc = elem.target.src;
  if (elemTargetSrc) {
    galleryItems.forEach((elem) => {
      if (elemTarget.src === elem.preview) {
        const instance = basicLightbox.create(`
    <img src="${elem.original}">`);
        instance.show();
      }
    });
  }
});
