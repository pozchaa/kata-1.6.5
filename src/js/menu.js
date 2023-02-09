const menuBtn = document.querySelector('.header__burger')
const menuBtnClose = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')
const header = document.querySelector('header')
const container = document.querySelector('.container')

menuBtn.addEventListener('click', function () {
  menu.style.left = '0'
  menu.style.visibility = 'visible'
  header.style.opacity = '0.3'
  container.style.opacity = '0.3'
  container.style.height = menu.clientHeight - header.clientHeight + 'px'
  container.style.overflow = 'hidden'
})

menuBtnClose.addEventListener('click', function () {
  menu.style.left = '-1000px'
  menu.style.visibility = 'hidden'
  header.style.opacity = '1'
  container.style.opacity = '1'
  container.style.height = 'auto'
  container.style.overflow = 'auto'
})
