$(document).ready(function () {
    $( ".toggle-button, .menutextclick" ).click(function() {
      $( ".menunav" ).toggle("slow");
    });

    var offset = $(document).scrollTop();
    console.log(offset);
    if(offset>=35){
        $(".menu").fadeIn(500);
    }else{
        $(".menu").fadeOut(500);
    }
    $(window).scroll(function() {
        var offset = $(document).scrollTop();
        if(offset>=35){
            $(".menu").fadeIn(500);
        }else{
            $(".menu").fadeOut(500);
        }
    });
    var width = $(window).width();
    //Добавляет плавность перехода меню
     $( ".nav-link, .dropdown-item" ).click(function() {
        var attr = $(this).attr("data");
        if(width<=767){$(".menunav").toggle("slow");}
        $('html, body').animate({scrollTop: $(attr).offset().top-80}, 550);
    });
});