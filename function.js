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