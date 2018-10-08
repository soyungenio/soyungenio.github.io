$( document ).ready(function() {
    var $frame  = $('#basic');
    var $slidee = $frame.children('ul').eq(0);
    var $wrap   = $frame.parent();

    if ($(window).width() < 767) {
        $("#basic li").css("width", $(window).width());
     }
    
    $('header .button').click(function() {
        $(".visibform").css("visibility", "visible");
        $(".mobform").css("z-index", "initial");
    });
});