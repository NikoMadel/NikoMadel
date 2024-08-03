const hamBurger = document.querySelector(".toggle-btn");
const sidebar = document.querySelector("#sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

hamBurger.addEventListener("click", function () {
  sidebar.classList.toggle("expand");
});

// Add event listeners to each sidebar link to close the sidebar when clicked
sidebarLinks.forEach(link => {
  link.addEventListener("click", function () {
    sidebar.classList.remove("expand");
  });
});

// Variables to store the touch start and end positions
let touchStartX = 0;
let touchEndX = 0;

// Function to handle touch start event
function handleTouchStart(event) {
  touchStartX = event.changedTouches[0].screenX;
}

// Function to handle touch end event
function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].screenX;
  handleGesture();
}

// Function to handle the swipe gesture
function handleGesture() {
  if (touchEndX > touchStartX) {
    // Swiped right
    sidebar.classList.remove("expand");
  }
}

// Add touch event listeners to the sidebar
sidebar.addEventListener("touchstart", handleTouchStart, false);
sidebar.addEventListener("touchend", handleTouchEnd, false);
