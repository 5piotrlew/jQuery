'use strict';


$(function () {

    $('body').find('p').eq(1).css({
        'color': 'green'
    });

    $('p').each(function (index) {
        $(this).addClass('paragraf-' + index);
        console.log($(this));

    });

});