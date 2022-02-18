// Preloader
$(window).on('load',function(){
    $('#preloader').fadeOut(1000)
})
$(function(){
    $(window).on('scroll',function(){
        if ($(window).scrollTop()>$('#nav').height()){
            $('#nav').addClass('menu_animate')
        }
        else {
            $('#nav').removeClass('menu_animate')
        }
       })
})