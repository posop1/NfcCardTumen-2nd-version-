$(document).ready(function ($) {

    $('.popup-open1').click(function () {
        $('#OpenModal1').fadeIn(20);
        $('body').addClass('open_modal');
    });

    $('.popup-close').click(function () {
        $(this).parents('.popup-fade').fadeOut();
        $('body').removeClass('open_modal');
    });

    $('.popup-fade').click(function (e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut(20);
            $('body').removeClass('open_modal');
        }
    });

});