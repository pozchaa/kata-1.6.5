import Swiper, { Navigation, Pagination } from 'swiper'

const swiperBrands = new Swiper('.swiper__brands', {
  modules: [Navigation, Pagination],
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

const swiperTechnic = new Swiper('.swiper__technic', {
  modules: [Navigation, Pagination],
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

const swiperPrice = new Swiper('.swiper__price', {
  modules: [Navigation, Pagination],
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

// let globalWidth = window.innerWidth

// import 'swiper/swiper.scss'
// import 'swiper/swiper-vars.scss'
// import 'swiper/modules/pagination/pagination.scss'

// if (globalWidth <= 767.97) {

// }

// import 'swiper/swiper-icons';
// import 'swiper/swiper-bundle.css';
// import 'swiper/css/navigation.scss';
// import 'swiper/scss';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
