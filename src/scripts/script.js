/* global Swiper, LazyLoad */

const sliderWeb = new Swiper('.porfolio-slider--web', {
  navigation: {
    nextEl: '.portfolio__web .porfolio-slider__next',
    prevEl: '.portfolio__web .porfolio-slider__prev',
  },
});

sliderWeb.on('slideChangeTransitionEnd', () => {
  const video = sliderWeb.wrapperEl.querySelector('.swiper-slide-active video');
  video.play();
});

sliderWeb.on('slideChange', () => {
  const video = sliderWeb.wrapperEl.querySelector('.swiper-slide-active video');
  video.pause();
  video.currentTime = 0;
});

const sliderSocial = new Swiper('.porfolio-slider--social', {
  navigation: {
    nextEl: '.portfolio__social .porfolio-slider__next',
    prevEl: '.portfolio__social .porfolio-slider__prev',
  },
});

const sliderCover = new Swiper('.porfolio-slider--cover', {
  navigation: {
    nextEl: '.portfolio__cover .porfolio-slider__next',
    prevEl: '.portfolio__cover .porfolio-slider__prev',
  },
});

const lazyLoadInstance = new LazyLoad();
