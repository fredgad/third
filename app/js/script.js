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
}); // $(document).ready(function () {
//   var goodP = document.querySelector('.menu__goods_p'),
//       goodUl = document.querySelector('.menu__goods_ul'),
//       headerGoodP = document.querySelector('.header__goods_p'),
//       headerGoodUl = document.querySelector('.header__goods_ul'),
//       container = document.getElementById('container'),
//       overlap = document.getElementById('overlap'),
//       sideMenu = document.getElementById('side__menu'),
//       digitItems = document.querySelectorAll('.digit');
//   goodUl.style.left = goodP.offsetLeft + 8 + 'px';
//   headerGoodUl.style.left = headerGoodP.offsetLeft + 8 + 'px';
//   var fixedHeader = document.querySelector('.fixed__header');
//   window.addEventListener('scroll', function () {
//     var scrolled = window.pageYOffset || document.scrollTop;
//     var digits = document.querySelector('.digits');
//     if (scrolled > 150) {
//       fixedHeader.style.top = '0px';
//     } else {
//       fixedHeader.style.top = '-66px';
//     }
//     if (digits) {
//       if (digits.getBoundingClientRect().top < window.innerHeight) {
//         howAnimation();
//       }
//     }
//     if (searchFormModal) {
//       $('#overlap_2').hide();
//       searchFormModal.style.display = 'none';
//     }
//     closeMenu();
//   });
//   document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('header__menu')) {
//       if ($(document).width() > 1024) {
//         container.style.transform = 'translate(-380px)';
//         sideMenu.style.transform = 'translate(0px)';
//         sideMenu.style.top = window.pageYOffset + 'px';
//         overlap.style.display = 'block';
//         fixedHeader.style.transform = 'translate(-380px)';
//       } else {
//         $('#header .navigation').toggle();
//       }
//     }
//   });
//   document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('close__side-menu')) {
//       closeMenu();
//     }
//   });

; //Navbar
// let menuItems = ['10444', '10449', '10467', '10466', '10458', '10847'];
// let submenuItems = ['10468', '10469', '10471', '10489', '10477', '10486', '10459', '15913', '10450', '10451', '10452', '10453'];
// $('.mkd-icon-font-awesome').click(()=> {
//     $('.mkd-mobile-nav').toggle();
// });
// function addEvents(arr) {
//   for(let x = 0; x < arr.length; x++) {
//     $('#mobile-menu-item-' + arr[x] + ' > a').click(()=> {
//       if($('#mobile-menu-item-' + arr[x]).hasClass('mkd-opened')) {
//         $('#mobile-menu-item-' + arr[x]).removeClass('mkd-opened');
//       } else {
//         $('#mobile-menu-item-' + arr[x]).addClass('mkd-opened');
//       }
//       $('#mobile-menu-item-' + arr[x] + ' > ul').toggle();
//     });
//   }
// };
// addEvents(menuItems);
// addEvents(submenuItems);
//Sliders
// $('.main_banner_slick').slick({
//   prevArrow: '<button class="slick-prev slick-arrow">←</button>',
//   nextArrow: '<button class="slick-next slick-arrow">→</button>',
//   infinite: true,
//   speed: 500,
//   dots: false,
//   fade: true,
//   cssEase: 'linear',
//   // autoplay: true,
//   autoplaySpeed: 3200
// });
// }
// var searchFormModal = document.getElementById('search__form_modal');
// //Search toggle
// $('.header__goods_p').click(function (e) {
//   e.preventDeafult();
//   alert('sad');
//   $('.header__goods_ul').toggle();
// }); 
// //Search button
// if (searchFormModal) {
//   $('.header__search').click(function () {
//     $('#overlap_2').show();
//     searchFormModal.style.display = 'flex';
//   });
//   $('.close__search-menu').click(function () {
//     $('#overlap_2').hide();
//     searchFormModal.style.display = 'none';
//   });
// }