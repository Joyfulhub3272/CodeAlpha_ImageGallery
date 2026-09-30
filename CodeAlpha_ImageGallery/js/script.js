/* Carousel script */
const galleryItems = document.querySelectorAll(".gallery-item");
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentImage = 0;

function showImage(index) {
  galleryItems.forEach((item) => {
    item.classList.remove("active");
  });

  const imgElement = galleryItems[index].querySelector("img");

  if (imgElement && imgElement.src) {
    galleryItems[index].style.backgroundImage = `url('${imgElement.src}')`;
  }

  galleryItems[index].classList.add("active");
}

showImage(currentImage);

const firstImg = galleryItems[0].querySelector("img");
if (firstImg && firstImg.src) {
  galleryItems[0].style.backgroundImage = `url('${firstImg.src}')`;
}

nextButton.addEventListener("click", function () {
  currentImage++;

  if (currentImage >= galleryItems.length) {
    currentImage = 0;
  }

  showImage(currentImage);
});

prevButton.addEventListener("click", function () {
  currentImage--;

  if (currentImage < 0) {
    currentImage = galleryItems.length - 1;
  }

  showImage(currentImage);
});
