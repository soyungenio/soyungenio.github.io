$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
    items:3,
    loop:true,
    mouseDrag: true,
    margin:10,
    nav:true,
    dots:false,
    navText : ['<img src="assets/img/slider/left.png" class="leftarrow">',
               '<img src="assets/img/slider/right.png" class="rightarrow">'],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,          
        },
        1000:{
            items:3,
            
        }
    }
});
$( ".item" ).mouseenter(function() {
    $( this ).find(".itemhover").css('visibility', 'visible');
    $( this ).find(".see").css('display', 'block');
  }).mouseleave(function() {
    $( this ).find(".itemhover").css('visibility', 'hidden');
    $( this ).find(".see").css('display', 'none');
  });
    
});