// about-modal
document.querySelector('.complete-close').addEventListener('click', function () {
  document.querySelector('body').classList.remove('active')
  document.querySelector('.complete-mailer').classList.remove('active')
});

document.querySelector('.error-close').addEventListener('click', function () {
  document.querySelector('body').classList.remove('active')
  document.querySelector('.error-mailer').classList.remove('active')
});

