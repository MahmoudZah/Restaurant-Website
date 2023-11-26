var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3.5, // Number of slides per view for large screens
  spaceBetween: 30,
  pagination: false,
  // other options...
  breakpoints: {
    1000: {
      slidesPerView: 6.5, // Number of slides per view for medium and smaller screens
    },
    1300: {
      slidesPerView: 8.5, // Number of slides per view for medium and smaller screens
    }
  },
});
var swiper4 = new Swiper('.mySwiper4', {
  slidesPerView: 2.3, // Number of slides per view for large screens
  spaceBetween: 30,
  pagination: false,
  // other options...
  breakpoints: {
    1000: {
      slidesPerView: 6.5, // Number of slides per view for medium and smaller screens
    },
    1300: {
      slidesPerView: 8.5, // Number of slides per view for medium and smaller screens
    }
  },
});
var swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 1.6, // Number of slides per view for large screens
  spaceBetween: 30,
  pagination: false,
  // other options...
  breakpoints: {
    1000: {
      slidesPerView: 2.8, // Number of slides per view for medium and smaller screens
    },
    1300: {
      slidesPerView: 2.8, // Number of slides per view for medium and smaller screens
    }
  },
});
var swiper3 = new Swiper('.mySwiper3', {
  slidesPerView: 1.6, // Number of slides per view for large screens
  spaceBetween: 30,
  pagination: false,
  // other options...
  breakpoints: {
    1000: {
      slidesPerView: 2.8, // Number of slides per view for medium and smaller screens
    },
    1300: {
      slidesPerView: 2.8, // Number of slides per view for medium and smaller screens
    }
  },
});

swiper.pagination.destroy();
swiper.pagination.el.classList.remove('swiper-pagination');