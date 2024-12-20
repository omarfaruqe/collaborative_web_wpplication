// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Create a "Scroll to Top" button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.textContent = '↑ Top';
    scrollToTopBtn.classList.add('scroll-to-top-btn');

    // Add styles to the button (optional)
    const style = document.createElement('style');
    style.textContent = `
        .scroll-to-top-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 10px 15px;
            font-size: 16px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
        .scroll-to-top-btn:hover {
            background-color: #0056b3;
        }
        .scroll-to-top-btn:hover {
            background-color: #0056b3;
        }
        .scroll-message {
            position: fixed;
            bottom: 80px;
            right: 20px;
            background-color: rgba(0, 0, 0, 0.7);
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            font-size: 14px;
            display: none;
            z-index: 1001;
        }
    `;
    document.head.appendChild(style);

    // Create a message element
    const scrollMessage = document.createElement('div');
    scrollMessage.textContent = 'Scrolling to Top...';
    scrollMessage.classList.add('scroll-message');
    document.body.appendChild(scrollMessage);

    // Append the button to the body
    document.body.appendChild(scrollToTopBtn);

    // Scroll to the top of the page when the button is clicked
    scrollToTopBtn.addEventListener('click', function () {
        // Show the message
        scrollMessage.style.display = 'block';

        // Smooth scroll to the top
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        // Hide the message after 1 second
        setTimeout(() => {
            scrollMessage.style.display = 'none';
        }, 1000);
    });
});
