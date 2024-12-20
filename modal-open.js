// Function to display the modal
function displayModal() {
    // Get the modal element
    var modalElement = document.getElementById('infoModal');
    
    // Create a Bootstrap Modal instance
    var modal = new bootstrap.Modal(modalElement);
    
    // Show the modal
    modal.show();
  }
  
  // Add an event listener to the button
  document.getElementById('openModalButton').addEventListener('click', displayModal);
  