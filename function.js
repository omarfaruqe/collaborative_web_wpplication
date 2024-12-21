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
function showNotification(message, type = 'info', duration = 3000) {
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerText = message;

    
    const styles = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #444;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            font-family: Arial, sans-serif;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .notification.info { background-color: #2196F3; }
        .notification.success { background-color: #4CAF50; }
        .notification.warning { background-color: #FFC107; }
        .notification.error { background-color: #F44336; }
        .notification.show {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    
    document.body.appendChild(notification);

    
    setTimeout(() => notification.classList.add('show'), 10);

    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300); 
    }, duration);
}


