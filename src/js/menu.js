const menuBtn = document.querySelector('.header__burger')
const menuBtnClose = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')
const header = document.querySelector('header')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const main = document.querySelector('main')

menuBtn.addEventListener('click', function () {
  if (!menu.classList.contains('menu_active')) {
    menu.classList.add('menu_active')
  }
  header.style.opacity = '0.3'
  container.classList.add('container_hidden')
  container.style.height = menu.clientHeight - header.clientHeight + 'px'
  menu.classList.add('none-scroll')
  body.classList.add('none-scroll')
})

menuBtnClose.addEventListener('click', function () {
  if (menu.classList.contains('menu_active')) {
    menu.classList.remove('menu_active')
  }
  header.style.opacity = '1'
  container.classList.remove('container_hidden')
  container.style.overflow = 'auto'
})

main.addEventListener('click', function (e) {
  if (
    menu.classList.contains('menu_active')
  ) {
    menu.classList.remove('menu_active')
    header.style.opacity = '1'
    main.style.opacity = '1'
    container.classList.remove('container_hidden')
    container.style.height = 'auto'
    menu.style.height = 'auto'
    menu.style.overflow = 'visible'
  }
})
