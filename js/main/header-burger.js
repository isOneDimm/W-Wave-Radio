// burger
document.querySelector(".header__dropdown ").addEventListener("click", function () {
  document.querySelector(".header__top-nav ").classList.toggle("active");
  document.querySelector(".header__bottom-nav ").classList.toggle("active");
  document.querySelector(".header__burger").classList.toggle("active");
});

document.querySelectorAll('.header__top-link').forEach(function (el) {
  el.addEventListener('click', function () {
    document.querySelector(".header__top-nav").classList.remove("active");
    document.querySelector(".header__bottom-nav ").classList.remove("active");
    document.querySelector(".header__burger").classList.remove("active");
  });
});