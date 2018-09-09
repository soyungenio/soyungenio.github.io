$(document).ready(function () {
    //Добавляет плавность перехода меню
     $( ".nav-link, .dropdown-item" ).click(function() {
        var attr = $(this).attr("data");
        $('html, body').animate({scrollTop: $(attr).offset().top-92}, 550);
    });
});