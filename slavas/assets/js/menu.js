$(document).ready(function () {
    $( ".toggle-button, .menutextclick" ).click(function() {
        $( ".menunav" ).toggle("slow");
        $( ".close-button" ).toggle("slow");
        $( ".number" ).toggle("slow");
    });
    $( ".close-button" ).click(function() {
        $( ".menunav" ).toggle("slow");
        $( ".close-button" ).toggle("slow");
        $( ".number" ).toggle("slow");
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
            $( ".menunav" ).toggle("slow");
            $( ".close-button" ).toggle("slow");
            $( ".number" ).toggle("slow");
         }
    });
});