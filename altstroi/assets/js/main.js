$( document ).ready(function() {
    var $frame  = $('#basic');
    var $slidee = $frame.children('ul').eq(0);
    var $wrap   = $frame.parent();

    if ($(window).width() < 767) {
        $("#basic li").css("width", $(window).width());
     }
    // Call Sly on frame
    $frame.sly({
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 3,
        scrollBar: $wrap.find('.scrollbar'),
        scrollBy: 1,
        pagesBar: $wrap.find('.pages'),
        activatePageOn: 'click',
        speed: 300,
        elasticBounds: 1,
        easing: 'easeOutExpo',
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,
    });
    
    $('.posNum').mask("+9 (999) 999-99-99");
    
    $('header .button').click(function() {
        $(".visibform").css("visibility", "visible");
        $(".mobform").css("z-index", "initial");
    });
});