$(document).ready(function () { // execute le js une fois que le fichier html est chargé 
    $("#lastName, #firstName").focus(function () { // Quand un des éléments à le focus lastName et firstName éxécute la fonction.
        $(this).css("border", "1px solid green"); // Met la bordure en vert de l'élément qui a le focus
    });

    $("#lastName, #firstName").focusout(function () { // Quand un des éléments perd le focus éxécute la fonction
        $(this).css("border", "1px solid red"); // Met la bordure en rouge de l'élement qui perd le focus
    });
});