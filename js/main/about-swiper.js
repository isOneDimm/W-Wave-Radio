// swiperAbout
let swiperAbout = new Swiper('.about__swiper', {
  speed: 600,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1300: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
    }
  }
});


