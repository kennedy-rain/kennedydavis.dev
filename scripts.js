// loading
function load(url) {
    // display loading image here...
    document.getElementById('loadingImg').visible = true;
    // request your data...
    var req = new XMLHttpRequest();
    req.open("POST", url, true);

    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            // content is loaded...hide the gif and display the content...
            if (req.responseText) {
                document.getElementById('content').innerHTML = req.responseText;
                document.getElementById('loadingImg').visible = false;
            }
        }
    };
    request.send(vars);
}

// make images clickable and magnify
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
