$(document).ready(function () {
    $('.nav-bar_menu').children().click(function () {   
        $('.nav-bar_menu').children().removeClass('active');
        $('.nav-bar_btn').removeClass('active');    
        $(this).addClass('active');
    });

    $('.nav-bar_btn').click(function () {
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
        speed: 300,
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