// script.js

// Get the modal and elements for the full image view
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const closeBtn = document.querySelector(".close");

// Function to open modal and display clicked image
document.querySelectorAll(".clickable-image").forEach((image) => {
    image.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Function to close the modal when the 'X' is clicked
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Function to close the modal when clicked outside the image
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
