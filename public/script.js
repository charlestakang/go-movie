document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Movie slider functionality
    const sliders = document.querySelectorAll('.movie-slider');
    
    sliders.forEach(slider => {
        const movieRow = slider.querySelector('.movie-row');
        const leftArrow = slider.querySelector('.left-arrow');
        const rightArrow = slider.querySelector('.right-arrow');
        
        // Set initial scroll position
        let scrollPosition = 0;
        
        // Calculate scroll amount based on container width
        const scrollAmount = () => {
            const containerWidth = slider.clientWidth;
            return containerWidth - 100; // Subtract some padding
        };
        
        // Handle right arrow click
        rightArrow.addEventListener('click', () => {
            scrollPosition += scrollAmount();
            if (scrollPosition > movieRow.scrollWidth - movieRow.clientWidth) {
                scrollPosition = movieRow.scrollWidth - movieRow.clientWidth;
            }
            movieRow.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
        
        // Handle left arrow click
        leftArrow.addEventListener('click', () => {
            scrollPosition -= scrollAmount();
            if (scrollPosition < 0) {
                scrollPosition = 0;
            }
            movieRow.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            // Reset scroll position on window resize
            scrollPosition = 0;
            movieRow.scrollTo({
                left: 0,
                behavior: 'auto'
            });
        });
    });

    // Movie card hover effect for touch devices
    const movieCards = document.querySelectorAll('.movie-card');
    
    movieCards.forEach(card => {
        card.addEventListener('touchstart', function() {
            // Remove active class from all cards
            movieCards.forEach(c => c.classList.remove('active'));
            // Add active class to current card
            this.classList.add('active');
        });
    });

    // Play button functionality (demo)
    const playButton = document.querySelector('.btn-play');
    if (playButton) {
        playButton.addEventListener('click', function() {
            alert('Video would start playing here in a real application.');
        });
    }

    // More info button functionality (demo)
    const moreInfoButton = document.querySelector('.btn-more-info');
    if (moreInfoButton) {
        moreInfoButton.addEventListener('click', function() {
            alert('More information would be displayed here in a real application.');
        });
    }
});