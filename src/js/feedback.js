const feedbackBtns = document.querySelectorAll('.navigation__item-tools')
const feedbackCloseBtn = document.querySelector('.feedback__close-btn')

const feedbackBody = document.querySelector('.feedback')

const main = document.querySelector('main')
const container = document.querySelector('.container')
const header = document.querySelector('header')
const menu = document.querySelector('.menu')

///////////////////////////////////////

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

feedbackBtns.forEach(function (feedbackBtn) {
  feedbackBtn.addEventListener('click', function (e) {
    if (!feedbackBody.classList.contains('feedback_open')) {
      feedbackBody.classList.add('feedback_open')
    }
    addLowOpacity([header, main, menu])
    addHidden([container, menu])
    container.style.height =
      feedbackBody.clientHeight - header.clientHeight + 'px'
    menu.style.height = feedbackBody.clientHeight - header.clientHeight + 'px'
  })
})

feedbackCloseBtn.addEventListener('click', function () {
  if (feedbackBody.classList.contains('feedback_open')) {
    feedbackBody.classList.remove('feedback_open')
  }
  removeLowOpacity([header, main, menu])
  removeHidden([container, menu])
  container.style.height = 'auto'
  menu.style.height = 'auto'
})

const feedbackPhoneBtns = document.querySelectorAll('.navigation__item-search')
const feedbackPhoneBody = document.querySelector('.feedback-phone')

feedbackPhoneBtns.forEach(function (feedbackPhoneBtn) {
  feedbackPhoneBtn.addEventListener('click', function (e) {
    if (!feedbackPhoneBody.classList.contains('feedback_open')) {
      feedbackPhoneBody.classList.add('feedback_open')
    }
    addLowOpacity([header, main, menu])
    addHidden([container, menu])
    container.style.height = feedbackPhoneBody.clientHeight + 'px'
    menu.style.height = feedbackPhoneBody.clientHeight + 'px'
  })
})

feedbackPhoneBody.children[0].children[0].addEventListener(
  'click',
  function () {
    if (feedbackPhoneBody.classList.contains('feedback_open')) {
      feedbackPhoneBody.classList.remove('feedback_open')
    }
    removeLowOpacity([header, main, menu])
    removeHidden([container, menu])
    container.style.height = 'auto'
    menu.style.height = 'auto'
  }
)

main.addEventListener('click', function (e) {
  feedbackBtns.forEach(function () {
    if (
      feedbackBody.classList.contains('feedback_open') &&
      e.target.classList[1] != 'navigation__item-tools'
    ) {
      feedbackBody.classList.remove('feedback_open')
      removeLowOpacity([header, main, menu])
      removeHidden([container, menu])
      container.style.height = 'auto'
      menu.style.height = 'auto'
    }
  })
  feedbackPhoneBtns.forEach(function () {
    if (
      feedbackPhoneBody.classList.contains('feedback_open') &&
      e.target.classList[1] != 'navigation__item-search'
    ) {
      console.log(1234)
      feedbackPhoneBody.classList.remove('feedback_open')
      removeLowOpacity([header, main, menu])
      removeHidden([container, menu])
      container.style.height = 'auto'
      menu.style.height = 'auto'
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
  addLowOpacity([header, main, menu])
  removeLowOpacity([container])
  addHidden([container])
  container.style.height =
    feedbackBody.clientHeight - header.clientHeight + 'px'
  if (globalWidth <= 767.97) {
    if (menu.classList.contains('menu_active')) {
      menu.classList.remove('menu_active')
    }
    removeHidden([container])
    menu.style.height = feedbackBody.clientHeight - header.clientHeight + 'px'
    addHidden([menu])
  }
})

menuFeedbackPhoneBtn.addEventListener('click', function (e) {
  if (!feedbackPhoneBody.classList.contains('feedback_open')) {
    feedbackPhoneBody.classList.add('feedback_open')
  }
  addLowOpacity([header, main, menu])
  removeLowOpacity([container])
  addHidden([container])
  container.style.height = feedbackPhoneBody.clientHeight + 'px'
  if (globalWidth <= 767.97) {
    if (menu.classList.contains('menu_active')) {
      menu.classList.remove('menu_active')
    }
    menu.style.height = feedbackPhoneBody.clientHeight + 'px'
    removeHidden([container])
    addHidden([menu])
  }
})
