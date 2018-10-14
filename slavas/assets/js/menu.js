$(document).ready(function () {
    $( ".toggle-button, .menutextclick" ).click(function() {
        $( ".mobmenu" ).css("visibility","visible");
        $( ".menunav" ).css("visibility","visible");
        $( ".close-button" ).css("visibility","visible");
        $( ".menu .number" ).css("visibility","visible");
    });
    $( ".close-button" ).click(function() {
        $( ".mobmenu" ).css("visibility","hidden");
        $( ".menunav" ).css("visibility","hidden");
        $( ".close-button" ).css("visibility","hidden");
        $( ".menu .number" ).css("visibility","hidden");
    });

    //Добавляет плавность перехода меню
     $( ".nav-link, .dropdown-item" ).click(function() {
         if($(window).width()>992){
            var attr = $(this).attr("data");
            $('html, body').animate({scrollTop: $(attr).offset().top+1}, 550);
         }
         else{
            var attr = $(this).attr("data");
            $('html, body').animate({scrollTop: $(attr).offset().top-65}, 550);
            $( ".mobmenu" ).css("visibility","hidden");
            $( ".menunav" ).css("visibility","hidden");
            $( ".close-button" ).css("visibility","hidden");
            $( ".menu .number" ).css("visibility","hidden");
         }
    });
});