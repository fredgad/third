"use strict";$(function(){window.addEventListener("scroll",function(){$(window).width()>768?((window.pageYOffset||document.scrollTop)>250?$("#mooving-header").addClass("down"):$("#mooving-header").removeClass("down"),$(".search-modal").addClass("search-of")):$("#mooving-header").removeClass("down")}),$(".search-event").click(function(){$(".search-modal").removeClass("search-of")}),$(window).click(function(e){e.target.classList.contains("search-modal")&&$(".search-modal").addClass("search-of")}),$(".main-banner").slick({prevArrow:'<button class="slick-prev slick-arrow">←</button>',nextArrow:'<button class="slick-next slick-arrow">→</button>',infinite:!0,speed:500,dots:!1,cssEase:"linear",autoplay:!0,autoplaySpeed:3200}),$(".shop-row__item > h5").click(function(e){$(e.target).toggleClass("active"),$(e.target).parent().toggleClass("active")}),$(".bar").click(function(e){$(".bar").toggleClass("active"),$(".bottom-header__menu").toggleClass("active"),$(window).scrollTop(0)}),$(".bottom-header__menu .shop-menu__item").click(function(e){$(e.target).toggleClass("active"),$(e.target).children([1]).toggleClass("active")}),$(".basket-trigger").click(function(e){var t=$(window).width()>400?$(e.target).offset().left-300:0;$(".basket").toggleClass("active"),$(".basket").css({top:$(e.target).offset().top+60+"px",left:t+"px"})}),$(".basket__head_close").click(function(e){$(".basket").toggleClass("active")})});