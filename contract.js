function validateContactFormBootstrap() {
    // Get the form element
    const form = document.getElementById('contactForm');

    // Clear previous validation states
    form.classList.remove('was-validated');

    // Check if the form is valid
    if (!form.checkValidity()) {
        // Add Bootstrap validation class to the form
        form.classList.add('was-validated');
        return false;
    }

    return true;
}

// Attach event listener to the form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    if (!validateContactFormBootstrap()) {
        event.preventDefault(); // Prevent form submission if validation fails
        event.stopPropagation();
    }
});
