$( document ).ready(function() {
    $('header .button').click(function() {
        if($(window).width()>992)
            $('html, body').animate({scrollTop: $(".feedback").offset().top}, 550);
        else
            $('html, body').animate({scrollTop: $(".feedback").offset().top-66}, 550);
    });
    $('.packages .button').click(function() {
        var headtext = $(this).prevAll(".head").first().text();
        var text = $(this).prevAll(".text").first().text();
        var price = $(this).prevAll(".price").first().text();
        $("textarea").text(headtext + '\n' + text + '\n' + price);

        if($(window).width()>992)
            $('html, body').animate({scrollTop: $(".feedback").offset().top}, 550);
        else
            $('html, body').animate({scrollTop: $(".feedback").offset().top-66}, 550);
    });
});