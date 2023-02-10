const feedbackBtns = document.querySelectorAll('.navigation__item-tools')
const feedbackCloseBtn = document.querySelector('.feedback__close-btn')

const feedbackBody = document.querySelector('.feedback')

const main = document.querySelector('main')
const container = document.querySelector('.container')
const header = document.querySelector('header')
const menu = document.querySelector('.menu')

feedbackBtns.forEach(function (feedbackBtn) {
  feedbackBtn.addEventListener('click', function (e) {
    if (!feedbackBody.classList.contains('feedback_open')) {
      feedbackBody.classList.add('feedback_open')
    }
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
  if (feedbackBody.classList.contains('feedback_open')) {
    feedbackBody.classList.remove('feedback_open')
  }
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

feedbackPhoneBtns.forEach(function (feedbackPhoneBtn) {
  feedbackPhoneBtn.addEventListener('click', function (e) {
    if (!feedbackPhoneBody.classList.contains('feedback_open')) {
      feedbackPhoneBody.classList.add('feedback_open')
    }
    header.style.opacity = '0.3'
    main.style.opacity = '0.3'
    menu.style.opacity = '0.3'
    container.style.height = feedbackPhoneBody.clientHeight + 'px'
    container.style.overflow = 'hidden'
    menu.style.height = feedbackPhoneBody.clientHeight + 'px'
    menu.style.overflow = 'hidden'
  })
})

feedbackPhoneBody.children[0].children[0].addEventListener(
  'click',
  function () {
    if (feedbackPhoneBody.classList.contains('feedback_open')) {
      feedbackPhoneBody.classList.remove('feedback_open')
    }
    header.style.opacity = '1'
    main.style.opacity = '1'
    menu.style.opacity = '1'
    container.style.height = 'auto'
    container.style.overflow = 'visible'
    menu.style.height = 'auto'
    menu.style.overflow = 'visible'
  }
)

main.addEventListener('click', function (e) {
  feedbackBtns.forEach(function () {
    if (
      feedbackBody.classList.contains('feedback_open') &&
      e.target.classList[1] != 'navigation__item-tools'
    ) {
      feedbackBody.classList.remove('feedback_open')
      header.style.opacity = '1'
      main.style.opacity = '1'
      menu.style.opacity = '1'
      container.style.height = 'auto'
      container.style.overflow = 'visible'
      menu.style.height = 'auto'
      menu.style.overflow = 'visible'
    }
  })
  feedbackPhoneBtns.forEach(function () {
    if (
      feedbackPhoneBody.classList.contains('feedback_open') &&
      e.target.classList[1] != 'navigation__item-search'
    ) {
      console.log(1234)
      feedbackPhoneBody.classList.remove('feedback_open')
      header.style.opacity = '1'
      main.style.opacity = '1'
      menu.style.opacity = '1'
      container.style.height = 'auto'
      container.style.overflow = 'visible'
      menu.style.height = 'auto'
      menu.style.overflow = 'visible'
    }
  })
})

////////////////Menu Feedback//////////////////

let globalWidth = window.innerWidth

const menuFeedbackBtn = document.querySelector('.menu .navigation__item-chat')

const menuFeedbackPhoneBtn = document.querySelector(
  '.menu .navigation__item-phone'
)

menuFeedbackBtn.addEventListener('click', function (e) {
  if (!feedbackBody.classList.contains('feedback_open')) {
    feedbackBody.classList.add('feedback_open')
  }
  header.style.opacity = '0.3'
  main.style.opacity = '0.3'
  menu.style.opacity = '0.3'
  container.style.opacity = '1'
  container.style.height =
    feedbackBody.clientHeight - header.clientHeight + 'px'
  container.style.overflow = 'hidden'
  if (globalWidth <= 767.97) {
    menu.style.height = feedbackBody.clientHeight - header.clientHeight + 'px'
    menu.style.left = '-1000px'
    menu.style.overflow = 'hidden'
  }
})

menuFeedbackPhoneBtn.addEventListener('click', function (e) {
  if (!feedbackPhoneBody.classList.contains('feedback_open')) {
    feedbackPhoneBody.classList.add('feedback_open')
  }
  header.style.opacity = '0.3'
  main.style.opacity = '0.3'
  menu.style.opacity = '0.3'
  container.style.opacity = '1'
  container.style.height = feedbackPhoneBody.clientHeight + 'px'
  container.style.overflow = 'hidden'
  if (globalWidth <= 767.97) {
    menu.style.height = feedbackPhoneBody.clientHeight + 'px'
    menu.style.overflow = 'hidden'
    menu.style.left = '-1000px'
    menu.style.visibility = 'hidden'
  }
})


