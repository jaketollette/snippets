$(document).ready(function () {
    "use strict"
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $("#uni-header").addClass("fixed");
        } else {
            $("#uni-header").removeClass("fixed");
        }
    });
    $("#HeroSlider, #Section_2_Slider, #Section_4_Slider").slick({
        dots: true,
        mobileFirst: true,
        arrows: true
    });
    $('#Section_1 div:nth-child(1), #Section_1 div:nth-child(2)').matchHeight({
        property: 'min-height'
    });
    // $('.btn-list a.dropdown').hover(function (e) {
    //    var width = $(this).outerWidth();
    //     $(this).next('div.sub-menu').css('width', width).removeClass('hide');
    // }, function() {
    //   $(this).next('div.sub-menu').addClass('hide');
    // });
    $('.btn-list a.dropdown').on('mouseenter click focus', function(e){
      e.preventDefault();
      var width = $(this).outerWidth();
      $(this).next('div.sub-menu').css('width', width).removeClass('hide');
    });
    $('.btn-list a.dropdown').on('mouseleave click blur', function(e){
      e.preventDefault();
      $(this).next('div.sub-menu').addClass('hide');
    });
});
