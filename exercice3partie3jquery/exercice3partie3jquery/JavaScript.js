$(document).ready(function () {
    var minNumber = 0;
    var maxNumber = 100;
    var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
    var reg = /^[0-9]{4,6}$/;  
    var verifNumber;
    $('#number').click(function () {
        verifNumber = $('#useNumber').val();
        
        if (verifNumber == randomNumber) {
            alert('youpi gagné');
        }
        else if (verifNumber > randomNumber) {
            alert('Le nombre est plus petit');
        }
        else if (verifNumber < randomNumber) {
            alert('Le nombre est plus grand');
        }
        else if ((verifNumber != reg) (verifNumber > 100 || verifNumber < 0)) {
            alert('erreur');
        }
});


    //$('#useNumber').val(randomNumber);

    //if (useNumber > randomNumber) {
    //    alert('Le nombre est plus petit').val();
    //    return;
    //}
    //else if (useNumber < randomNumber) {
    //    alert('Le nombre est plus grand').val();
    //    return;
    //}
    //else if (useNumber == randomNumber) {
    //    alert('Bravo le bon chiffre est') + $('randomNumber').val();
    //}
});