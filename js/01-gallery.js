import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
// console.log(gallery);

galleryItems.forEach((galleryItem) => {
  const a = document.createElement("a");
  a.classList.add("gallery__link");
  a.href = `${galleryItem.original}`;
  const image = document.createElement("img");
  image.src = `${galleryItem.preview}`;
  image.alt = `${galleryItem.description}`;
  image.setAttribute("data-source", `${galleryItem.original}`);
  image.classList.add("gallery__image");
  gallery.append(a);
  a.append(image);
  a.addEventListener("click", (event) => {
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img src=${galleryItem.original} width="800" height="600">
    
`);
    instance.show();

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  });
  // console.log(galleryItem);
});
