$(document).ready(function () {
    $('#buttonPixel').click(function () {
        $('.rectangle').height($('.rectangle').height() + 10);
        if ($('.rectangle').height() == 100) {
            $('.rectangle').height(10);
        }
    });
    $('#buttonColor').click(function () {
        $('.rectangle').css('background-color', 'green');
    });
    $('#buttonChange').click(function () {
        $('.rectangle').css('background-color', 'blue');
    });
    $('#buttonHide').click(function () {
        $('.rectangle').hide();
    });
    $('#buttonShow').click(function () {
        $('.rectangle').show();
    });
});