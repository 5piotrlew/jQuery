'use strict';


$(function () {

    $('p').click(function () {

        $(this).css("color", "orange");

    });


    //grupa zdarzen na naglowku
    $('h1').on({
        'click': function () {
            $(this).css("color", "orange");
        },
        'mouseleave': function () {
            $(this).css("color", "inherit");
        }

    });



});