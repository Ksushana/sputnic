(function () {
  var mySwiper = new Swiper('.product__slider', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
