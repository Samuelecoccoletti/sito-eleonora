// ===== ROMANTIC WEBSITE JAVASCRIPT =====

// Slideshow functionality
let current = 0;
const images = [
  "IMG_6458.jpg",
  "IMG_6459.jpg", 
  "IMG_6461.jpg",
  "WhatsApp Image 2025-07-16 at 01.48.22.jpeg",
  "WhatsApp Image 2025-07-21 at 12.24.44.jpeg"
];

// Initialize slideshow
function initSlideshow() {
  const hero = document.querySelector('.hero');
  if (hero) {
    setInterval(() => {
      current = (current + 1) % images.length;
      hero.style.backgroundImage = `url('images/${images[current]}')`;
    }, 4000);
  }
}

// Music control functionality
let audio = null;
let isPlaying = false;

function initMusic() {
  // Create audio element (you can add a romantic instrumental track)
  audio = new Audio('audio/romantic-music.mp3'); // Add your music file
  audio.loop = true;
  audio.volume = 0.3;
  
  const musicControl = document.querySelector('.music-control');
  if (musicControl) {
    musicControl.addEventListener('click', toggleMusic);
  }
}

function toggleMusic() {
  const musicControl = document.querySelector('.music-control');
  
  if (!isPlaying) {
    if (audio) {
      audio.play().then(() => {
        isPlaying = true;
        musicControl.classList.add('playing');
        musicControl.innerHTML = '⏸️';
      }).catch(() => {
        // Music file not found, hide control
        if (musicControl) musicControl.style.display = 'none';
      });
    }
  } else {
    if (audio) {
      audio.pause();
      isPlaying = false;
      musicControl.classList.remove('playing');
      musicControl.innerHTML = '🎵';
    }
  }
}

// Smooth page transitions
function initPageTransitions() {
  // Add fade-in effect to all pages
  document.body.classList.add('fade-in');
  
  // Smooth transitions between pages
  const links = document.querySelectorAll('a[href$=".html"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      
      // Fade out current page
      document.body.style.opacity = '0';
      document.body.style.transform = 'translateY(20px)';
      
      // Navigate after fade
      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
}

// Gallery hover effects
function initGalleryEffects() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
}

// Fixed menu functionality (no JavaScript needed)

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initSlideshow();
  initMusic();
  initPageTransitions();
  initGalleryEffects();
  
  // Add loading animation
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});
