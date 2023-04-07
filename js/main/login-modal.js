// login-modal
document.querySelector('.header__login').addEventListener('click', function () {
  document.querySelector('.header__login-modal').classList.add('active')
});
document.querySelector('.login-btn-close').addEventListener('click', function () {
  document.querySelector('.header__login-modal').classList.remove('active')
});

function loginDesktop() {
  let scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  document.querySelector('.header__login').addEventListener('click', function () {
    document.body.style.overflow = 'hidden';
    document.querySelector('body').style.marginLeft = scrollbar;
    document.querySelector('.header__login-modal').style.marginLeft = scrollbar;
  });
  document.querySelector('.login-btn-close').addEventListener('click', function () {
    document.body.style.overflow = 'visible';
    document.querySelector('body').style.marginLeft = '0px';
    document.querySelector('.header__login-modal').style.marginLeft = '0px';
  });
}

loginDesktop();

$(window).resize(function () {
  loginDesktop();
});



