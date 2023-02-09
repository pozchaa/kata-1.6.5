

let globalWidth = window.innerWidth

if (globalWidth <= 767.9) {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

if (globalWidth <= 767.9) {
  var swiper = new Swiper('.swiper__brands', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

if (globalWidth <= 767.9) {
  var swipers = new Swiper('.swiper__price', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}
