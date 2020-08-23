(function () {
  const initSwiper = (selector) => new Swiper(selector, {
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

  const initDesktop = () => {
    const swipers = initSwiper('.product__slider');

    $('.product__slider').last().addClass('display-none-mob');

    const prevButton = $('.product__slider .swiper-button-prev').first();
    const nextButton = $('.product__slider .swiper-button-next').first();

    const slidePrev = () =>
      swipers.forEach(swiper => swiper.slidePrev());

    const slideNext = () =>
      swipers.forEach(swiper => swiper.slideNext());

    prevButton.on('click', slidePrev);
    nextButton.on('click', slideNext);
  };

  const initMobile = () => {
    let activeSwiper = null;
    const productSlider1 = $('.product__slider--1')[0];
    const productSlider2 = $('.product__slider--2')[0];

    const showSlider = (slider) => {
      if (activeSwiper) {
        activeSwiper.destroy();
      }
      $('.product__slider').addClass('display-none-mob');
      $(slider).removeClass('display-none-mob');
      activeSwiper = initSwiper(slider);
    };

    $('.radio-label').first().on('click', () => {
      showSlider(productSlider1);
    });

    $('.radio-label').last().on('click', () => {
      showSlider(productSlider2);
    });

    showSlider(productSlider1);
  };

  if (window.isMobile()) {
    initMobile();
  } else {
    initDesktop();
  }

  $('.radio-label').first().on('click', (evt) => {
    $(evt.target).removeClass('inactive');
    $('.radio-label').addClass('inactive');
  });

  $('.radio-label').last().on('click', (evt) => {
    $(evt.target).removeClass('inactive');
    $('.radio-label').addClass('inactive');
  });
})();
