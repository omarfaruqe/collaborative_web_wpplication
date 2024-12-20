function showProgressBar() {
    // Show the modal
    $('#progressModal').modal('show');

    // Start the progress
    let progress = 0;
    const progressBar = document.getElementById('progressBar');
    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            // Do not close the modal here
        } else {
            progress++;
            progressBar.style.width = progress + '%';
            progressBar.setAttribute('aria-valuenow', progress);
            progressBar.textContent = progress + '%';
        }
    }, 20000 / 100); // 45 seconds divided by 100 steps

    // Reset progress function
    window.resetProgress = function() {
        clearInterval(interval);
        progress = 0;
        progressBar.style.width = '0%';
        progressBar.setAttribute('aria-valuenow', '0');
        progressBar.textContent = '0%';
        // Do not hide the modal here
    };
}
