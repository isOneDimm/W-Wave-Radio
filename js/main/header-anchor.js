// header-anchor
$('.header-anchor a').on('click', function () {
  let href = $(this).attr('href');

  $('html, body').animate({
      scrollTop: $(href).offset().top
  }, {
      duration: 1300,
  });

  return false;
});
