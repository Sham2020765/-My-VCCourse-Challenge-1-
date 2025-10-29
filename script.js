Simple lightbox effect for gallery images
document.addEventListener('DOMContentLoaded', function
  const images = document.querySelectorAll('.gallery img
  
  images.forEach(img =
    img.addEventListener('click', function
      const lightbox = document.createElement('div');
      lightbox.classList.add('lightbox');
      document.body.appendChild(lightbox);
      
      const bigImage = document.createElement('img');
      bigImage.src = this.src;
      lightbox.appendChild(bigImage);
      
      lightbox.addEventListener('click', function
        lightbox.remove
