$(document).ready(function () {
    $( ".toggle-button, .menutextclick" ).click(function() {
        $( ".menunav" ).toggle("fast");
      });

    //Добавляет плавность перехода меню
     $( ".nav-link, .dropdown-item" ).click(function() {
         if($(window).width()>767){
            var attr = $(this).attr("data");
            $('html, body').animate({scrollTop: $(attr).offset().top-92}, 550);
         }
         else{
            $( ".menunav" ).toggle("slow");
            var attr = $(this).attr("data");
            $('html, body').animate({scrollTop: $(attr).offset().top-59}, 550);
         }
    });
});