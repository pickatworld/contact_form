/* global $, alert, console*/

$(function() {

    'user strict';

    $('.username').blur(function () {

        if($(this).val().length <= 2) {
            $(this).css('border', '1px solid #F00');
            $(this).parent().find('.custom-alert').fadeIn(200);
            $(this).parent().find('.asterisk').fadeIn(100);

        } else {
            $(this).css('border','1px solid #080');
            $(this).parent().find('.custom-alert').fadeOut(200);
            $(this).parent().find('.asterisk').fadeOut(100);
        }
    });

    $('.mail').blur(function () {

        if($(this).val() === '') {
            $(this).css('border', '1px solid #F00');
            $(this).parent().find('.custom-alert').fadeIn(200);
            $(this).parent().find('.asterisk').fadeIn(100);

        } else {
            $(this).css('border','1px solid #080');
            $(this).parent().find('.custom-alert').fadeOut(200);
            $(this).parent().find('.asterisk').fadeOut(100);
        }
    });

    $('.mobile').blur(function () {

        if($(this).val().length < 11) {
            $(this).css('border', '1px solid #F00');
            $(this).parent().find('.custom-alert').fadeIn(200);
            $(this).parent().find('.asterisk').fadeIn(100);

        } else {
            $(this).css('border','1px solid #080');
            $(this).parent().find('.custom-alert').fadeOut(200);
            $(this).parent().find('.asterisk').fadeOut(100);
        }
    });

    $('.massage').blur(function () {

        if($(this).val().length < 10) {
            $(this).css('border', '1px solid #F00');
            $(this).parent().find('.custom-alert').fadeIn(200);
            $(this).parent().find('.asterisk').fadeIn(100);

        } else {
            $(this).css('border','1px solid #080');
            $(this).parent().find('.custom-alert').fadeOut(200);
            $(this).parent().find('.asterisk').fadeOut(100);
        }
    });

});
