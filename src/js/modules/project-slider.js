(function () {
  var mySwiper = new Swiper('.project__slider', {
    speed: 400,
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
