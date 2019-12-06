$(document).ready(function () {
    $('.nav-bar__menu').children().click(function () {   
        $('.nav-bar__menu').children().removeClass('active');
        $('.nav-bar__btn').removeClass('active');    
        $(this).addClass('active');
    });

    $('.nav-bar__btn').click(function () {
        $(this).toggleClass('active');  
    });

    $(function () {
        var banner = $('.banner');
        var header = $('header');
        pos = banner.offset();

        $(window).scroll(function () {
            if ($(this).scrollTop() > pos.top + banner.height() - header.height()) {
                $(header).addClass('change'); 
            } else if ($(this).scrollTop() <= pos.top + banner.height() - header.height() && header.hasClass('change')) {
                $(header).removeClass('change');
            }
        });
    });

    $('.slick-wrap').slick({
        dots: true,
        loop: true,
        prevArrow: null,
        nextArrow: null,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $('.features-content').slick({
        dots: true,
        loop: true,
        infinite: true,
        prevArrow: null,
        nextArrow: null,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    }); 
});