$(document).ready(function () {
  $('.toggler').click(function () {
    $('.open__menu').toggle(400);
    $('.close__menu').toggle(400);
    $('#header__navbar').fadeToggle(700);
  });



  $('.__input').on('input', function () {
    var inputValue = $(this).val();

    if (inputValue.trim() !== '') {
      $(this).siblings('p').animate({
        'font-size': '0.9rem',
        'border': 'none'
      }, 500);
    } else {
      $(this).siblings('p').animate({
        'font-size': '1.2rem'
      }, 500);
    }
  });
});