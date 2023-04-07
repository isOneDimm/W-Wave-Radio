// guests-anchor-mobile
function anchorMobile() {
  if ($(window).width() < 426) {
    document.querySelectorAll('.guests__people-btn').forEach(function (btn) {
      let pathGuests = btn.getAttribute('data-path');
      btn.setAttribute('href', '#' + pathGuests)
    });
  }
  else {
    document.querySelectorAll('.guests__people-btn').forEach(function (btn) {
      btn.removeAttribute('href')
    });
  }
};

anchorMobile();

$(window).resize(function () {
  anchorMobile();
});


$('.guests-anchor a').on('click', function () {
  let href = $(this).attr('href');

  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, {
    duration: 1300,
  });

  return false;
});
