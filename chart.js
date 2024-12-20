// Function to display the chart
function displayChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    
    // Create a new Chart instance
    var myChart = new Chart(ctx, {
      type: 'bar', // Chart type (bar, line, pie, etc.)
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
        datasets: [{
          label: 'My Dataset', // Dataset label
          data: [12, 19, 3, 5, 2], // Dataset values
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Bar color
          borderColor: 'rgba(54, 162, 235, 1)', // Border color
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true // Start the Y-axis at zero
          }
        }
      }
    });
  }
  
  // Call the function to display the chart
  displayChart();
  