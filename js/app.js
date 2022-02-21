// Preloader
$(window).on('load',function(){
    $('#preloader').fadeOut(1000)
})
$(function(){
    // fixed nav
    $(window).on('scroll',function(){
        if ($(window).scrollTop()>$('#nav').height()){
            $('#nav').addClass('menu_animate')
        }
        else {
            $('#nav').removeClass('menu_animate')
        }
    })
    $('.banner_slider').slick({
        prevArrow:'<i class="slider_icon fas fa-angle-left"></i>',
        nextArrow:'<i class="slider_icon fas fa-angle-right"></i>',
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    })
    $('.increment').spincrement({
        duration:3000,
    })
})