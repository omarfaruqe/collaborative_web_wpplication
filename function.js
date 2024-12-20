let currentIndex = 0;

function showCarousel(images) {
    if (!images || images.length === 0) {
        console.error('No images provided');
        return;
    }

    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'carousel-container';

    const imgElement = document.createElement('img');
    imgElement.src = images[currentIndex];
    imgElement.className = 'carousel-image';
    carouselContainer.appendChild(imgElement);

    const prevButton = document.createElement('button');
    prevButton.innerText = 'Previous';
    prevButton.onclick = () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        imgElement.src = images[currentIndex];
    };
    carouselContainer.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next';
    nextButton.onclick = () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        imgElement.src = images[currentIndex];
    };
    carouselContainer.appendChild(nextButton);

    document.body.appendChild(carouselContainer);
}
function initializeMap() {
    // Set the view to a starting position [latitude, longitude] and zoom level
    var map = L.map('map').setView([51.505, -0.09], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return map;
}

// Function to add a marker
function addMarker(map) {
    map.on('click', function(e) {
        var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
        marker.bindPopup('Marker at ' + e.latlng.toString()).openPopup();
    });
}

// Initialize the map on page load
document.addEventListener('DOMContentLoaded', () => {
    var map = initializeMap();

    // Add marker on button click
    document.getElementById('add-marker-btn').addEventListener('click', () => {
        addMarker(map);
    });
});
