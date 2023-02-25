jQuery(document).ready(function ($) {
  $('.shop__more').on('click', function () {
    $('.shop__description').toggleClass('shop__description--show');
    $('.shop__more').toggleClass('shop__more--show');
  });

  ///==================================================

  ///----top-menu
  // var $window = $(window),
  //   $target = $('.header__container'),
  //   $topPosition = $target.offset().top;
  // $window.on('scroll', function () {
  //   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //   if (scrollTop > $topPosition && $(document).width() < 1023) {
  //     $target.addClass('header__fixed');
  //     return;
  //   } else {
  //     $target.removeClass('header__fixed');
  //   }
  //   return;
  // });

  ////----sub menu-show

  // $('.menu-item-has-children__btn').on('click', function () {
  //   if ($(document).width() < 1023) {
  //     $(this).siblings('.sub-menu').slideToggle('fast');
  //   } else {
  //   }
  // });

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
