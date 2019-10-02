"use strict";

$(function () {
  window.addEventListener('scroll', function () {
    if ($(window).width() > 768) {
      var scrolled = window.pageYOffset || document.scrollTop;

      if (scrolled > 250) {
        $('#mooving-header').addClass('down');
      } else {
        $('#mooving-header').removeClass('down');
      }

      $('.search-modal').addClass('search-of');
    } else {
      $('#mooving-header').removeClass('down');
    }
  });
  $('.search-event').click(function () {
    $('.search-modal').removeClass('search-of');
  });
  $(window).click(function (e) {
    if (e.target.classList.contains('search-modal')) {
      $('.search-modal').addClass('search-of');
    }
  });
  $('.main-banner').slick({
    prevArrow: '<button class="slick-prev slick-arrow">←</button>',
    nextArrow: '<button class="slick-next slick-arrow">→</button>',
    infinite: true,
    speed: 500,
    dots: false,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3200
  });
  $('.shop-row__item > h5').click(function (e) {
    $(e.target).toggleClass('active');
    $(e.target).parent().toggleClass('active');
  });
  $('.bar').click(function (e) {
    $('.bar').toggleClass('active');
    $('.bottom-header__menu').toggleClass('active');
    $(window).scrollTop(0);
  });
  $('.bottom-header__menu .shop-menu__item').click(function (e) {
    $(e.target).toggleClass('active');
    $(e.target).children([1]).toggleClass('active');
  });
  $('.basket-trigger').click(function (e) {
    var left = $(window).width() > 400 ? $(e.target).offset().left - 300 : 0;
    $('.basket').toggleClass('active');
    $('.basket').css({
      'top': $(e.target).offset().top + 60 + 'px',
      'left': left + 'px'
    });
  });
  $('.basket__head_close').click(function (e) {
    $('.basket').toggleClass('active');
  });
});