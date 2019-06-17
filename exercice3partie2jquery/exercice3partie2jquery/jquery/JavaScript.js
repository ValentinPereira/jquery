$(document).ready(function () { // execution du fichier html
    $("#show").click(function () {
        $("#text").show();
        // $("#text").css("visibility", "hidden" );
    });
    $("#hide").click(function () {
        $("#text").hide();
        // pareil sauf à la place hidden "visible"
    });
});