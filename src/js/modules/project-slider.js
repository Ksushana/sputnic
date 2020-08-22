(function () {
  var mySwiper = new Swiper('.project__slider', {
    speed: 400,
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
})();
