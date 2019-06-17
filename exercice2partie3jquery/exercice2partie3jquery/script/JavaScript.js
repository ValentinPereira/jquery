$(document).ready(function () {
    var numberMore = 0;
    $('#moreNumber').click(function () {
        numberMore++;
        $('#useNumber').val(numberMore);
    });
    $('#lessNumber').click(function () {
        numberMore--;
        $('#useNumber').val(numberMore); // ou .attr ('value, numberMore);
    });
});