// const email = document.querySelector('#mail')

// email.addEventListener('input', function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity('Это не емаил блин!')
//   } else {
//     email.setCustomValidity('')
//   }
// })

document
  .querySelector('.feedback__submit')
  .addEventListener('click', function (evt) {
    evt.preventDefault()
  })
