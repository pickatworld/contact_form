/* global $, alert, console*/

$(function() {

    'user strict';

    var userError   = true,
        emailError  = true,
        mobileError = true,
        msgError    = true;

    $('.username').blur(function () {

        if($(this).val().length <= 2) {

            $(this).css('border', '1px solid #F00')
            .parent().find('.custom-alert').fadeIn(200)
            .end().find('.asterisk').fadeIn(100);

            userError = true;

        } else {
           $(this).css('border', '1px solid #F00')
            .parent().find('.custom-alert').fadeIn(200)
            .end().find('.asterisk').fadeIn(100);

            userError = false;
        }
    });

    $('.mail').blur(function () {

        if($(this).val() === '') {

            $(this).css('border', '1px solid #F00')
            .parent().find('.custom-alert').fadeIn(200).end()
            .find('.asterisk').fadeIn(100);

            emailError = true;

        } else {
            $(this).css('border', '1px solid #F00')
            .parent().find('.custom-alert').fadeIn(200).end()
            .find('.asterisk').fadeIn(100);

            emailError = false;
        }
    });

    $('.mobile').blur(function () {

        if($(this).val().length < 11) {

            $(this).css('border', '1px solid #F00')
            .parent().find('.custom-alert').fadeIn(200).end()
            .find('.asterisk').fadeIn(100);

            mobileError = true;

        } else {
            $(this).css('border','1px solid #080')
            .parent().find('.custom-alert').fadeOut(200).end()
            .find('.asterisk').fadeOut(100);

            mobileError = false;
        }
    });

    $('.massage').blur(function () {

        if($(this).val().length < 10) {

            $(this).css('border', '1px solid #F00')
            .parent().find('.custom-alert').fadeIn(200).end()
            .find('.asterisk').fadeIn(100);

            msgError = true;

        } else {
            $(this).css('border','1px solid #080')
            .parent().find('.custom-alert').fadeOut(200).end()
            .find('.asterisk').fadeOut(100);

            msgError = false;
        }
       
    });

    // Submit Form Validation

    $('.contact-form').submit(function (e) {

        if (userError === true || emailError === true || mobileError === true || msgError === true) {
            e.preventDefault();
            $('.username, .mail, .mobile, .massage').blur();
        }
        
    });

});
