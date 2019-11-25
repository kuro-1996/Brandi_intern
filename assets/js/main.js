$(document).ready(function () {
    $("a").click(function () {
        $("a").removeClass("active");
        $(this).addClass("active");
    });
});

$(function () {
    var banner = $('.banner');
    var header = $('header');
    var anchor = $('.nav-bar_menu').children();
    pos = banner.offset();

    $(window).scroll(function () {
        if ($(this).scrollTop() > pos.top + banner.height() - 70) {
            $(header).addClass('change');
            $(anchor).hover(function(){
                $(this).css('color','#062033');
            },
            function () {
                $(this).css('color', '#ffffff');
            });
        } else if ($(this).scrollTop() <= pos.top + banner.height() - 70 && header.hasClass('change')) {
            $(header).removeClass('change');
            $(anchor).hover(function(){
                $(this).css('color','#32b0ee');
            },
            function () {
                $(this).css('color', '#ffffff');

            });
        }
    });
});