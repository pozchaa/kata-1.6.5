const menuBtn = document.querySelector('.header__burger')
const menuBtnClose = document.querySelector('.menu__btn')
const menu = document.querySelector('.menu')
const header = document.querySelector('header')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const main = document.querySelector('main')

function addLowOpacity(elements) {
  elements.forEach(function (element) {
    element.classList.add('low-opacity')
  })
}

function removeLowOpacity(elements) {
  elements.forEach(function (element) {
    element.classList.remove('low-opacity')
  })
}

/////////////////////////////////

function addHidden(elements) {
  elements.forEach(function (element) {
    element.classList.add('add-hidden')
  })
}

function removeHidden(elements) {
  elements.forEach(function (element) {
    element.classList.remove('add-hidden')
  })
}

menuBtn.addEventListener('click', function () {
  if (!menu.classList.contains('menu_active')) {
    menu.classList.add('menu_active')
    body.style.position = 'fixed'
  }
  addLowOpacity([header, container])
  container.style.height = menu.clientHeight - header.clientHeight + 'px'
  menu.classList.add('none-scroll')
  body.classList.add('none-scroll')
})

menuBtnClose.addEventListener('click', function () {
  if (menu.classList.contains('menu_active')) {
    menu.classList.remove('menu_active')
    body.style.position = 'static'
  }
  removeLowOpacity([header, container])
  removeHidden(container)
})

main.addEventListener('click', function (e) {
  if (menu.classList.contains('menu_active')) {
    menu.classList.remove('menu_active')
    removeLowOpacity([header, main, container])
    container.style.height = 'auto'
    menu.style.height = 'auto'
    removeHidden(menu)
  }
})
