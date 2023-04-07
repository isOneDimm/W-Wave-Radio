// headerBroadcast
document.querySelector('.header__bottom-mobile').addEventListener("click", function () {
  document.querySelector('.header__bottom').classList.toggle('active');
  document.querySelector('.header__mobile-btn').classList.toggle('active');
  document.querySelector('.header__bottom-play').classList.toggle('active');
});