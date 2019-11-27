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
    var para = $('.nav-bar_brand p');
        pos = banner.offset();

    $(window).scroll(function () {
        if ($(this).scrollTop() > pos.top + banner.height() - 70) {
            $(header).addClass('change');
            $(para).css('opacity','1');
            $(para).addClass('fix');
            $(anchor).addClass('fix');
            $(anchor).hover(function(){
                $(this).css('color','#062033');
            },
            function () {
                $(this).css('color', '#ffffff');
            });
        } else if ($(this).scrollTop() <= pos.top + banner.height() - 70 && header.hasClass('change')) {
            $(header).removeClass('change');
            $(para).css('opacity','0.3');
            $(para).removeClass('fix');
            $(anchor).removeClass('fix');
            $(anchor).hover(function(){
                $(this).css('color','#32b0ee');
            },
            function () {
                $(this).css('color', '#ffffff');

            });
        }
    });
});