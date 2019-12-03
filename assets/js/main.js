$(document).ready(function () {
    $('.nav-bar_menu').children().click(function () {
        $('.nav-bar_menu').children().removeClass("active");
        $(this).addClass("active");
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


    $(function () {
        var banner = $('.banner');
        var header = $('header');
        var anchor = $('.nav-bar_menu').children();
        var para = $('.nav-bar_brand p');
        pos = banner.offset();

        $(window).scroll(function () {
            if ($(this).scrollTop() > pos.top + banner.height() - header.height()) {
                $(header).addClass('change');
                $(para).css('opacity', '1');
                $(para).addClass('fix');
                $(anchor).addClass('fix');
                $(anchor).hover(function () {
                    $(this).css('color', '#1B4F72 ');
                },
                    function () {
                        $(this).css('color', '#ffffff');
                    });
            } else if ($(this).scrollTop() <= pos.top + banner.height() - header.height() && header.hasClass('change')) {
                $(header).removeClass('change');
                $(para).removeClass('fix');
                $(anchor).removeClass('fix');
                $(anchor).hover(function () {
                    $(this).css('color', '#32b0ee');
                },
                    function () {
                        $(this).css('color', '#ffffff');

                    });
            }
        });
    });

    $('.nav-bar_btn').click(function () {
        $(this).toggleClass('active');
        $('.nav-bar_menu').toggleClass('active');
        $('.btn_icon').toggleClass('active');
    });
    $('.nav-bar_menu').children().click(function () {
        $('.nav-bar_btn').removeClass('active');
        $('.nav-bar_menu').removeClass('active');
        $('.btn_icon').removeClass('active');
    });

});