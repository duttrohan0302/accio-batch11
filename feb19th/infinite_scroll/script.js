import APIkey from "./config.js";

const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

// require Does not work with browser side rendering, use import instead
//  Dont push sensitive keys like this on github, but this is open source and available everywhere

let photosArray = [];
let totalImages = 0;
let imagesLoaded = 0;
let ready = false;

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
}
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;

  photosArray.forEach((photo) => {
    const item = document.createElement("a");

    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    img.addEventListener("load", imageLoaded);
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}
async function getPhotos() {
  const query = "monument";
  const count = 10;
  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${APIkey}&count=${count}&query=${query}&orientation=squarish;`;

  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();

    displayPhotos();
    console.log(photosArray);
  } catch (error) {
    console.log(error);
  }
}
getPhotos();

window.addEventListener("scroll", () => {
  // console.log(window.scrollY,window.innerHeight,document.body.offsetHeight)

  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});
