document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('imgModalSrc');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const closeBtn = document.querySelector('.img-modal-close');
    
    let galleryImages = [];
    let currentIndex = 0;
  
    // Select all gallery items
    const galleryItems = document.querySelectorAll('.popup-gallery');
  
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const galleryData = this.getAttribute('data-gallery');
        if (galleryData) {
          // Split the data-gallery string into an array of image paths
          galleryImages = galleryData.split(',');
          currentIndex = 0;
          updateImage();
          modal.style.display = 'block';
          
          // Show navigation buttons if there is more than one image
          if (galleryImages.length > 1) {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
          } else {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
          }
        }
      });
    });
  
    function updateImage() {
      if (galleryImages.length > 0) {
        modalImg.src = galleryImages[currentIndex];
      }
    }
  
    // Next button click
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex++;
        if (currentIndex >= galleryImages.length) {
          currentIndex = 0;
        }
        updateImage();
      });
    }
  
    // Prev button click
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = galleryImages.length - 1;
        }
        updateImage();
      });
    }
  
    // Swipe functionality for mobile
    let touchStartX = 0;
    let touchEndX = 0;
  
    modal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
  
    modal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  
    function handleSwipe() {
      if (galleryImages.length <= 1) return;
      
      if (touchEndX < touchStartX - 50) {
        // Swipe Left (Next Image)
        currentIndex++;
        if (currentIndex >= galleryImages.length) currentIndex = 0;
        updateImage();
      }
      
      if (touchEndX > touchStartX + 50) {
        // Swipe Right (Prev Image)
        currentIndex--;
        if (currentIndex < 0) currentIndex = galleryImages.length - 1;
        updateImage();
      }
    }
  });
  