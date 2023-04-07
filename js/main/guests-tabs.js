// guests-tabs
document.querySelectorAll('.guests__people-btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    let path = e.currentTarget.dataset.path;
    document.querySelectorAll('.guests__people-btn').forEach(function (btn) {
      btn.classList.remove('people-btn-active')
    });
    e.currentTarget.classList.add('people-btn-active');
    document.querySelectorAll('.guests__item-right').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('guests__right-active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__right-active');
  });
});


