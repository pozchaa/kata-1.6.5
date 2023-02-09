const feedbackBtns = document.querySelectorAll('.navigation__item-tools')
const feedbackCloseBtn = document.querySelector('.feedback__close-btn')

const feedbackBody = document.querySelector('.feedback')

const main = document.querySelector('main')
const container = document.querySelector('.container')
const header = document.querySelector('header')
const menu = document.querySelector('.menu')

feedbackBtns.forEach(function (feedbackBtn) {
  feedbackBtn.addEventListener('click', function (e) {
    feedbackBody.style.display = 'block'
    header.style.opacity = '0.3'
    main.style.opacity = '0.3'
    menu.style.opacity = '0.3'
    container.style.height =
      feedbackBody.clientHeight - header.clientHeight + 'px'
    container.style.overflow = 'hidden'
    menu.style.height = feedbackBody.clientHeight - header.clientHeight + 'px'
    menu.style.overflow = 'hidden'
  })
})

feedbackCloseBtn.addEventListener('click', function () {
  feedbackBody.style.display = 'none'
  header.style.opacity = '1'
  main.style.opacity = '1'
  menu.style.opacity = '1'
  container.style.height = 'auto'
  container.style.overflow = 'visible'
  menu.style.height = 'auto'
  menu.style.overflow = 'visible'
})

const feedbackPhoneBtns = document.querySelectorAll('.navigation__item-search')
const feedbackPhoneBody = document.querySelector('.feedback-phone')

console.log(feedbackPhoneBody.children[0].children[0])

feedbackPhoneBtns.forEach(function (feedbackPhoneBtn) {
  feedbackPhoneBtn.addEventListener('click', function (e) {
    feedbackPhoneBody.style.display = 'block'
    header.style.opacity = '0.3'
    main.style.opacity = '0.3'
    menu.style.opacity = '0.3'
    container.style.height = feedbackPhoneBody.clientHeight + 'px'
    container.style.overflow = 'hidden'
    menu.style.height = feedbackPhoneBody.clientHeight + 'px'
    menu.style.overflow = 'hidden'
  })
})

feedbackPhoneBody.children[0].children[0].addEventListener('click', function () {
  feedbackPhoneBody.style.display = 'none'
  header.style.opacity = '1'
  main.style.opacity = '1'
  menu.style.opacity = '1'
  container.style.height = 'auto'
  container.style.overflow = 'visible'
  menu.style.height = 'auto'
  menu.style.overflow = 'visible'
})
