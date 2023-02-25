jQuery(document).ready(function ($) {
  ///----top-menu
  var $window = $(window),
    $target = $('.header__container'),
    $topPosition = $target.offset().top;
  $window.on('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > $topPosition && $(document).width() < 1023) {
      $target.addClass('header__fixed');
      return;
    } else {
      $target.removeClass('header__fixed');
    }
    return;
  });

  ////----sub menu-show

  $('.menu-item-has-children__btn').on('click', function () {
    if ($(document).width() < 1023) {
      $(this).siblings('.sub-menu').slideToggle('fast');
    } else {
    }
  });

  //details open-close

  $('.categories > details').each(function () {
    if ($(document).width() > 1023) {
      $(this).attr('open', true);
    } else {
      $(this).attr('open', false);
    }
  });

  /////////CHEKING///////////////////////

  $window.on('resize', function () {
    if ($(document).width() > 1023) {
      $target.removeClass('header__fixed');
    } else {
      $target.addClass('header__fixed');
    }
  });

  //---sliders
  $('.testimonials__body').slick({
    infinite: true,
    speed: 600,
    arrows: false,
  });

  $('.popup__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  });

  $('.single-galery__active-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.single-galery__list',
  });
  $('.single-galery__list').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.single-galery__active-list',
    focusOnSelect: true,
    prevArrow:
      '<span class="single-galery__arrow single-galery__arrow--left"><img src="./img/icon/select-arrow.svg" alt="" /></span>',
    nextArrow:
      ' <span class="single-galery__arrow"><img src="./img/icon/select-arrow.svg" alt="" /></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  //popup show curent image
  $('.single-galery__list .single-galery__slide').on('click', function () {
    const index = $(this).attr('data-slick-index');
    $('.popup__slider').slick('slickGoTo', index);
  });

  //popup
  $('.popup').on('click', function () {
    PopUpHide();
  });

  $('.single-galery__zoom').on('click', function () {
    PopUpShow();
  });

  function PopUpShow() {
    $('.popup').css('position', 'fixed').css('left', 0);
  }
  function PopUpHide() {
    $('.popup').css('position', 'fixed').css('left', -9999);
  }
});
