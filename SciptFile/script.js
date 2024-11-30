// Carousel Images
const images = [
  "https://cdn.prod.website-files.com/670e6d5ddcec8bb7c56d8133/670e6fa1339ed219d3a7421e_template-img-09.webp",
  "https://cdn.prod.website-files.com/670e6d5ddcec8bb7c56d8133/670e6f9d339ed219d3a74090_template-img-11.webp",
  "https://cdn.prod.website-files.com/670e6d5ddcec8bb7c56d8133/670e6f9c339ed219d3a73f7e_template-img-10.webp",
];

let currentImageIndex = 0;
const carouselImage = document.getElementById("carouselImage");

carouselImage.src = images[currentImageIndex];

// Change carousel images every 3 seconds
setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  carouselImage.src = images[currentImageIndex];
}, 3000);

// Get the elements for dropdown toggle
const toggleButton = document.getElementById("toggleDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");
const toggleIcon = toggleButton.querySelector("i");

// Add click event listener to toggle button
toggleButton.addEventListener("click", function () {
  // Toggle the dropdown menu visibility
  dropdownMenu.classList.toggle("hidden");

  // Toggle the icons between list (bi-list) and close (bi-x)
  if (dropdownMenu.classList.contains("hidden")) {
    toggleIcon.classList.remove("bi-x"); // Remove "close" icon
    toggleIcon.classList.add("bi-list"); // Add "list" icon
  } else {
    toggleIcon.classList.remove("bi-list"); // Remove "list" icon
    toggleIcon.classList.add("bi-x"); // Add "close" icon
  }
});

/* ---------------------- Case Studies------------ */

// // Intersection Observer to handle animations
// document.addEventListener("DOMContentLoaded", () => {
//   const cards = document.querySelectorAll(".case-study-card");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//         }
//       });
//     },
//     {
//       threshold: 0.5, // Trigger when 50% of the card is visible
//     }
//   );

//   cards.forEach((card) => observer.observe(card));
// });

// Intersection Observer to detect when elements enter the viewport
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".case-study-card");

  // Options for the observer (only trigger when 50% of the card is in view)
  const options = {
    threshold: 0.5,
  };

  // Callback function to be executed when an element enters the viewport
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing after the card is visible
      }
    });
  };

  // Create the observer
  const observer = new IntersectionObserver(callback, options);

  // Start observing each card
  cards.forEach((card) => {
    observer.observe(card);
  });
});
