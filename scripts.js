let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

document.getElementById('load-content-btn').addEventListener('click', function() {
    // Fetch content via AJAX
    fetchContent();
});

function fetchContent() {
    const contentDiv = document.getElementById('content');

    // Simulating an AJAX request
    setTimeout(() => {
        // Content fetched from server (simulated)
        const newContent = `
            <h1>New Content</h1>
            <p>This is the new content loaded via AJAX.</p>
        `;

        // Insert content into the div
        contentDiv.innerHTML = newContent;

        // Trigger the smooth fade-in effect
        contentDiv.classList.add('visible');
    }, 1000); // Simulate network delay
}

function fetchContent() {
    const contentDiv = document.getElementById('content');

    // Show a loading indicator (optional)
    contentDiv.innerHTML = '<p>Loading...</p>';
    contentDiv.classList.remove('visible');

    fetch('https://api.example.com/content') // Replace with your API endpoint
        .then(response => response.text()) // Use .json() if the response is JSON
        .then(data => {
            // Insert the fetched content into the div
            contentDiv.innerHTML = data;

            // Trigger the smooth fade-in effect
            contentDiv.classList.add('visible');
        })
        .catch(error => {
            console.error('Error fetching content:', error);
            contentDiv.innerHTML = '<p>Failed to load content.</p>';
        });
}
