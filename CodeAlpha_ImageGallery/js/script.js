/* ============================================
   IMAGE GALLERY CAROUSEL - JAVASCRIPT
   ============================================ */

/* ============================================
   DOM ELEMENT SELECTION
   ============================================ */

/* Select all gallery items from the HTML */
const gallertItems = document.querySelectorAll(".gallery-item");
/* Select the next button for carousel navigation */
const nextButton = document.querySelector(".next");
/* Select the previous button for carousel navigation */
const prevButton = document.querySelector(".prev");

/* ============================================
   VARIABLES
   ============================================ */

/* Tracks the index of the currently displayed image (starts at 0) */
let currentImage = 0;

/* ============================================
   SHOW IMAGE FUNCTION
   ============================================ */

/**
 * Displays the gallery item at the specified index
 * Hides all other items by removing the 'active' class
 * Shows the desired item by adding the 'active' class
 * Also sets the background image for the blur effect
 *
 * @param {number} index - The index of the image to display (0-based)
 */
function showImage(index) {
  /* Remove 'active' class from all gallery items to hide them */
  gallertItems.forEach((item) => {
    item.classList.remove("active");
  });

  /* Get the image element at the specified index */
  const imgElement = gallertItems[index].querySelector("img");

  /* Set the background image of the gallery-item for the blur effect */
  if (imgElement && imgElement.src) {
    gallertItems[index].style.backgroundImage = `url('${imgElement.src}')`;
  }

  /* Add 'active' class to the item at the specified index to show it */
  gallertItems[index].classList.add("active");
}

/* Display the first image (index 0) when page loads */
showImage(currentImage);

/* Initialize background image for the first gallery item for blur effect */
const firstImg = gallertItems[0].querySelector("img");
if (firstImg && firstImg.src) {
  gallertItems[0].style.backgroundImage = `url('${firstImg.src}')`;
}

/* ============================================
   NEXT BUTTON EVENT LISTENER
   ============================================ */

/* Handles clicking the next button to display the next image in carousel */
nextButton.addEventListener("click", function () {
  /* Increment the current image index */
  currentImage++;
  /* If we've reached the end of the gallery, loop back to the first image */
  if (currentImage >= gallertItems.length) {
    currentImage = 0;
  }
  /* Display the image at the new index */
  showImage(currentImage);
});

/* ============================================
   PREVIOUS BUTTON EVENT LISTENER
   ============================================ */

/* Handles clicking the previous button to display the previous image in carousel */
prevButton.addEventListener("click", function () {
  /* Decrement the current image index */
  currentImage--;
  /* If we go below zero, loop to the last image in the gallery */
  if (currentImage < 0) {
    currentImage = gallertItems.length - 1;
  }
  /* Display the image at the new index */
  showImage(currentImage);
});
