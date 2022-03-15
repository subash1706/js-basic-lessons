const form = document.getElementById('form')
form.novalidate = true
const email = document.getElementById('email')
const msg = document.querySelector('.msg-error')
const error = document.querySelector('.error')

form.addEventListener('submit', function (e) {
  if (email.value === '') {
    e.preventDefault()
    msg.style.display = 'block'
    error.style.display = 'block'
  }
})
email.addEventListener('focus', function () {
  msg.style.display = 'none'
  error.style.display = 'none'
})
