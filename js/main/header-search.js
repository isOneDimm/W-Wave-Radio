// search
document.querySelector('.header__btn-search').addEventListener('click', function () {
    document.querySelector('.header__search-form').classList.add('active');
  });
  
  document.addEventListener('click', function (e) {
    let target = e.target;
    let form = document.querySelector('.header__search-form');
    if (!target.closest('.header__btn-container')) {
      form.classList.remove('active');
      form.querySelector('input').value = '';
      document.querySelector('.header__btn-search').classList.remove('active')
    };
  });