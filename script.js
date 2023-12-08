// Add an event listener to the download button
document.addEventListener('DOMContentLoaded', function() {
    var downloadButton = document.querySelector('.download-button');
    downloadButton.addEventListener('click', function() {
      // Track the download event (optional)
      // Replace 'YOUR_RESUME_FILENAME' with the actual name of your resume file
      trackDownload('myresume');
    });
  });
  
  // Function to track the download event (optional)
  function trackDownload(filename) {
    // Replace this code with the actual tracking code or API call
    console.log('Download tracked: ' + filename);
  }