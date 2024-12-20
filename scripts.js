// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Create the spinner element dynamically
    const spinner = document.createElement('div');
    spinner.id = 'spinner';
    spinner.classList.add('loading-spinner');

    // Create the toggle button dynamically
    const button = document.createElement('button');
    button.id = 'toggleSpinnerButton';
    button.classList.add('toggle-spinner-btn');
    button.textContent = 'Toggle Spinner';

    // Add styles for the spinner and button
    const style = document.createElement('style');
    style.textContent = `
        .loading-spinner {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 50px;
            height: 50px;
            margin: -25px 0 0 -25px; /* Center the spinner */
            border: 5px solid rgba(0, 0, 0, 0.2);
            border-top: 5px solid #007bff; /* Spinner color */
            border-radius: 50%;
            animation: spin 1s linear infinite;
            z-index: 1000;
            display: none; /* Initially hidden */
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }

        .toggle-spinner-btn {
            position: fixed;
            bottom: 20px;
            left: 20px;
            padding: 10px 15px;
            font-size: 14px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            z-index: 1000;
        }

        .toggle-spinner-btn:hover {
            background-color: #0056b3;
        }
    `;
    document.head.appendChild(style);

    // Append the spinner and button to the body
    document.body.appendChild(spinner);
    document.body.appendChild(button);

    // Add click event listener to the button
    let isSpinnerVisible = false;
    button.addEventListener('click', function () {
        if (isSpinnerVisible) {
            spinner.style.display = 'none';
            button.textContent = 'Show Spinner';
        } else {
            spinner.style.display = 'block';
            button.textContent = 'Hide Spinner';
        }
        isSpinnerVisible = !isSpinnerVisible;
    });
});
