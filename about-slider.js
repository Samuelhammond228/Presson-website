document.addEventListener('DOMContentLoaded', function() {
    const aboutSlides = document.querySelectorAll('.about-slide');
    let currentSlide = 0;

    function nextAboutSlide() {
        aboutSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % aboutSlides.length;
        aboutSlides[currentSlide].classList.add('active');
    }

    // Change slide every 7 seconds
    setInterval(nextAboutSlide, 7000);
}); 