// Photo Gallery Data
// Replace these placeholder images with your actual photos
const photos = [
    {
        id: 1,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        title: 'Mountain Sunset',
        description: 'Breathtaking sunset over mountain peaks',
        category: 'nature',
        aspect: 'landscape'
    },
    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
        title: 'Urban Portrait',
        description: 'Street portrait in the city',
        category: 'portrait',
        aspect: 'portrait'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
        title: 'City Lights',
        description: 'Downtown cityscape at night',
        category: 'urban',
        aspect: 'landscape'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800',
        title: 'Forest Path',
        description: 'Misty morning in the forest',
        category: 'nature',
        aspect: 'portrait'
    },
    {
        id: 5,
        src: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        title: 'Modern Architecture',
        description: 'Contemporary building design',
        category: 'architecture',
        aspect: 'square'
    },
    {
        id: 6,
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        title: 'Beach Paradise',
        description: 'Tropical beach at sunset',
        category: 'travel',
        aspect: 'landscape'
    },
    {
        id: 7,
        src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800',
        title: 'River Canyon',
        description: 'Winding river through canyon',
        category: 'nature',
        aspect: 'portrait'
    },
    {
        id: 8,
        src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800',
        title: 'Fashion Portrait',
        description: 'Editorial fashion photography',
        category: 'portrait',
        aspect: 'portrait'
    },
    {
        id: 9,
        src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
        title: 'City Streets',
        description: 'Urban exploration',
        category: 'urban',
        aspect: 'landscape'
    },
    {
        id: 10,
        src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800',
        title: 'Wilderness',
        description: 'Untouched natural landscape',
        category: 'nature',
        aspect: 'landscape'
    },
    {
        id: 11,
        src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800',
        title: 'Glass Building',
        description: 'Reflective architecture',
        category: 'architecture',
        aspect: 'portrait'
    },
    {
        id: 12,
        src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
        title: 'Mountain Road',
        description: 'Adventure travel photography',
        category: 'travel',
        aspect: 'landscape'
    },
    {
        id: 13,
        src: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800',
        title: 'Coastal Cliffs',
        description: 'Dramatic coastal landscape',
        category: 'nature',
        aspect: 'portrait'
    },
    {
        id: 14,
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
        title: 'Creative Portrait',
        description: 'Artistic portrait photography',
        category: 'portrait',
        aspect: 'portrait'
    },
    {
        id: 15,
        src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
        title: 'Urban Geometry',
        description: 'Architectural patterns',
        category: 'urban',
        aspect: 'square'
    },
    {
        id: 16,
        src: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800',
        title: 'Desert Dunes',
        description: 'Golden sand dunes',
        category: 'travel',
        aspect: 'landscape'
    },
    {
        id: 17,
        src: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=800',
        title: 'Autumn Colors',
        description: 'Fall foliage landscape',
        category: 'nature',
        aspect: 'landscape'
    },
    {
        id: 18,
        src: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=800',
        title: 'Modern Lines',
        description: 'Contemporary architecture',
        category: 'architecture',
        aspect: 'portrait'
    },
    {
        id: 19,
        src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
        title: 'Snow Peak',
        description: 'Mountain winter landscape',
        category: 'nature',
        aspect: 'landscape'
    },
    {
        id: 20,
        src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
        title: 'Model Shot',
        description: 'Professional portrait session',
        category: 'portrait',
        aspect: 'portrait'
    }
];

// State
let currentFilter = 'all';
let currentPhotoIndex = 0;
let displayedPhotos = 12;
let filteredPhotos = [...photos];

// DOM Elements
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const closeLightbox = document.getElementById('closeLightbox');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMore');

// Initialize Gallery
function initGallery() {
    renderGallery();
    setupEventListeners();
    setupScrollAnimations();
}

// Render Gallery
function renderGallery() {
    gallery.innerHTML = '';
    
    const photosToShow = filteredPhotos.slice(0, displayedPhotos);
    
    photosToShow.forEach((photo, index) => {
        const item = createGalleryItem(photo, index);
        gallery.appendChild(item);
    });

    // Hide load more button if all photos are displayed
    if (displayedPhotos >= filteredPhotos.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
    }

    // Trigger scroll animations
    setTimeout(() => {
        setupScrollAnimations();
    }, 100);
}

// Create Gallery Item
function createGalleryItem(photo, index) {
    const div = document.createElement('div');
    div.className = 'masonry-item reveal';
    
    const aspectRatios = {
        landscape: 'aspect-[4/3]',
        portrait: 'aspect-[3/4]',
        square: 'aspect-square'
    };
    
    div.innerHTML = `
        <div class="gallery-item ${aspectRatios[photo.aspect] || 'aspect-[4/3]'} bg-gray-200 rounded-lg" data-index="${index}">
            <img src="${photo.src}" alt="${photo.title}" loading="lazy" class="rounded-lg">
            <div class="gallery-overlay">
                <h3 class="text-white font-display text-xl mb-1">${photo.title}</h3>
                <p class="text-white text-sm font-light">${photo.description}</p>
            </div>
        </div>
    `;
    
    return div;
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            filterGallery();
        });
    });

    // Gallery items click
    gallery.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            const index = parseInt(item.dataset.index);
            openLightbox(index);
        }
    });

    // Lightbox controls
    closeLightbox.addEventListener('click', closeLightboxFunc);
    prevBtn.addEventListener('click', showPrevPhoto);
    nextBtn.addEventListener('click', showNextPhoto);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightboxFunc();
        if (e.key === 'ArrowLeft') showPrevPhoto();
        if (e.key === 'ArrowRight') showNextPhoto();
    });

    // Close lightbox on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxFunc();
        }
    });

    // Load more button
    loadMoreBtn.addEventListener('click', loadMorePhotos);
}

// Filter Gallery
function filterGallery() {
    if (currentFilter === 'all') {
        filteredPhotos = [...photos];
    } else {
        filteredPhotos = photos.filter(photo => photo.category === currentFilter);
    }
    
    displayedPhotos = 12;
    renderGallery();
}

// Load More Photos
function loadMorePhotos() {
    displayedPhotos += 8;
    renderGallery();
}

// Open Lightbox
function openLightbox(index) {
    currentPhotoIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Lightbox
function closeLightboxFunc() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Show Previous Photo
function showPrevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    updateLightboxContent();
}

// Show Next Photo
function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % filteredPhotos.length;
    updateLightboxContent();
}

// Update Lightbox Content
function updateLightboxContent() {
    const photo = filteredPhotos[currentPhotoIndex];
    
    // Fade out
    lightboxImg.style.opacity = '0';
    
    setTimeout(() => {
        lightboxImg.src = photo.src;
        lightboxTitle.textContent = photo.title;
        lightboxDesc.textContent = photo.description;
        
        // Fade in
        lightboxImg.style.opacity = '1';
    }, 150);
}

lightboxImg.style.transition = 'opacity 0.15s ease';

// Scroll Animations
function setupScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// Lazy Load Images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Smooth scroll to top on filter change
function smoothScrollToGallery() {
    const gallerySection = document.getElementById('gallery');
    const offset = 200;
    const elementPosition = gallerySection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Add smooth scroll to filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(smoothScrollToGallery, 100);
    });
});

// Console Easter Egg
console.log('%c📸 Photography Portfolio', 'font-size: 24px; font-weight: bold; color: #ff6b6b;');
console.log('%cLike what you see? Let\'s collaborate!', 'font-size: 14px; color: #1a1a1a;');

// Initialize on load
window.addEventListener('load', () => {
    initGallery();
    
    // Add fade in animation to page
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add touch swipe support for mobile lightbox navigation
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            showNextPhoto();
        } else {
            showPrevPhoto();
        }
    }
}

// Prevent right-click on images (optional - for photo protection)
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Add image counter to lightbox
function updateImageCounter() {
    const counter = document.createElement('div');
    counter.id = 'imageCounter';
    counter.className = 'absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold';
    counter.textContent = `${currentPhotoIndex + 1} / ${filteredPhotos.length}`;
    
    const existingCounter = document.getElementById('imageCounter');
    if (existingCounter) {
        existingCounter.textContent = `${currentPhotoIndex + 1} / ${filteredPhotos.length}`;
    } else {
        lightbox.querySelector('.lightbox-content').appendChild(counter);
    }
}

// Update the updateLightboxContent function to include counter
const originalUpdateLightboxContent = updateLightboxContent;
updateLightboxContent = function() {
    originalUpdateLightboxContent();
    updateImageCounter();
};
