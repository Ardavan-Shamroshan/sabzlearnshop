const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 800,
    loop: true,
    breakpoints: {
        576: {
            slidesPerView: 1
        },
        700: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        },
    },
});