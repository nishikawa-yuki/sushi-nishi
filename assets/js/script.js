$(function() {
    $('.c-nav__btn').on('click', function() {
        $('.l-header').toggleClass('js-open');
    })

    $('.c-nav__mask').on('click', function() {
        $('.l-header').toggleClass('js-open');
    })
    
  $('.js-kv').slick({
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false
  });
});