import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 2,
    lazy: true,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
{/* <img data-src="a.jpg" class="swiper-lazy product-image">
    <div class="product-name">Pro Cat Plus x ST3250 Li Metal Şanzımanlı Çift Akülü Şarjlı
        Vidalama Matkap 2 Yıl Garantili</div>
    <div class="product-price">
        <div class="old-price">199,90 TL</div>
        <div class="new-price">159.90 TL</div>
    </div>
    <button class="product-button">Sepete Ekle</button>
    <div class="product-shipping"><i class="fas fa-truck"></i> Ücretsiz Kargo</div> */}