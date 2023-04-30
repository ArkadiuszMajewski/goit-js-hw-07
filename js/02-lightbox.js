import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
console.log(gallery);

galleryItems.forEach((galleryItem) => {
  const li = document.createElement("li");
  li.classList.add("gallery__item");
  const a = document.createElement("a");
  a.classList.add("gallery__link");
  a.href = `${galleryItem.original}`;
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = `${galleryItem.preview}`;
  img.alt = `${galleryItem.description}`;
  gallery.append(li);
  li.append(a);
  a.append(img);
  li.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
(function () {
  var $gallery = new SimpleLightbox(".gallery a", {});
})();
