(function () {
  var mySwiper = new Swiper('.product__slider', {
    speed: 400,
    slidesPerView: 1,

    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 20,
      }
    }
  });
})();
