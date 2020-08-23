(function () {
  const swipers = new Swiper('.product__slider', {
    speed: 400,
    slidesPerView: 1,

    loop: true,
    breakpoints: {
      768: {
        spaceBetween: 20,
        slidesPerView: 1,
      }
    }
  });

  $('.product__slider').last().addClass('display-none-mob');

  const prevButton = $('.product__slider .swiper-button-prev').first();
  const nextButton = $('.product__slider .swiper-button-next').first();

  const slidePrev = () =>
    swipers.forEach(swiper => swiper.slidePrev());

  const slideNext = () =>
    swipers.forEach(swiper => swiper.slideNext());

  prevButton.on('click', slidePrev);
  nextButton.on('click', slideNext);
})();
