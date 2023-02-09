const email = document.getElementById('mail')

email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Это не емаил блин!')
  } else {
    email.setCustomValidity('')
  }
})

const phone = document.getElementById('phone')

phone.addEventListener('input', function (event) {
  if (phone.validity.typeMismatch) {
    phone.setCustomValidity('Это не тел блин!')
  } else {
    phone.setCustomValidity('')
  }
})
