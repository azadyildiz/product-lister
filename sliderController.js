import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

export var swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 10,
    slidesPerGroup: 2,
    lazy: { // Lazy load image
        loadPrevNext: true,
    },
    freeMode: true,
    observer: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});