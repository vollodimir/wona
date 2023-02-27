jQuery(document).ready(function ($) {
  $('.shop__more').on('click', function () {
    $('.shop__description').toggleClass('shop__description--show');
    $('.shop__more').toggleClass('shop__more--show');
  });

  $('.header__input').on('click', function () {
    $('body').toggleClass('menu-open');
    $('.header__blur').slideToggle('fast');
  });

  ////----sub menu-show

  $('.menu-item-has-children__btn').on('click', function () {
    $(this).siblings('.sub-menu').slideToggle('slow');
    $(this).toggleClass('menu-item-has-children__btn--open');
  });

  //---sliders
  $('.slider__list').slick({
    rtl: true,
    lazyLoad: 'progressive',
    arrows: false,
    dots: true,
    dotsClass: 'slider__dots',
    draggable: true,
    swipe: true,
    touchThreshold: 500,
    focusOnSelect: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
