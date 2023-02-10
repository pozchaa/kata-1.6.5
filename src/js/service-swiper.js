// let globalWidth = window.innerWidth

const swiper1 = new Swiper('.swiper__brands', {
  enabled: false,
  breakpoints: {
    768: {
      enabled: false
    },
    1: {
      enabled: true
    }
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

const swiper2 = new Swiper('.swiper__technic', {
  enabled: false,
  breakpoints: {
    768: {
      enabled: false
    },
    1: {
      enabled: true
    }
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

const swiper3 = new Swiper('.swiper__price', {
  enabled: false,
  breakpoints: {
    768: {
      enabled: false
    },
    1: {
      enabled: true
    }
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
