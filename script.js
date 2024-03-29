// JavaScript code to change images with time
var images = [ 'fashion4.jpeg.jpg', 'fashion4.jpeg.jpg','fashion5.jpegs.jpg', 'fashion6.jpegs.jpg', 'fashion7.jpeg.jpg', 'fashion8.jpeg.jpg']; // Array of image filenames
var currentIndex = 0; // Index of the current image

function changeImage() {
  // Get the image element
  var imgElement = document.getElementById('image');
  // Change the source of the image
  imgElement.src = images[currentIndex];
  // Increment the index for the next image
  currentIndex = (currentIndex + 1) % images.length;
}

// Change image every 10 seconds (30000 milliseconds)
setInterval(changeImage, 10000);

