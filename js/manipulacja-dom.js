'use strict';


$(function () {

    jQuery(document).ready(function () {


        var tekstParagrafuPierwszego = $('#paragraf').text();
        console.log(tekstParagrafuPierwszego);

        $(".paragraf").text(tekstParagrafuPierwszego);

        //dodanie html
        $(".paragrafnext").html("To jest <strong>paragraf</strong> z dodanym <br> HTML");

        //Dodawanie tresci na koncu selektora
        $(".paragrafnext").append("tresc na koncu selektora");

        //Dodawanie tresci za selektorem

        $(".paragrafnext").after("tresc za selektorem");

        // usuwanie elementu i jego zawartosci
        $("strong").remove();
        
        //usuwanie tylko jego zawartosci
        $('.paragraf').empty();
        
        //Dodawanie css
        $(".paragrafnext").css({'font-size': '3em', 'color': 'red'});
        
        //dodawanie klasy
        $('h1').addClass('blue');
        
        //Dodawanie atrybutu
        $('h1').attr("imie", "Marcin");


    });

});