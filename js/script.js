
// aos js 

 AOS.init();

//  scrolltop 
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $("#topbtn").fadeIn();
        } else{
           $("#topbtn").fadeOut();
        }
        
    });

    $("#topbtn").click(function(){
        $('html ,body').animate({
            scrollTop : 0},800)
    })
})

// slick trusted company slider
$(document).ready(function () {
    $(".moto-item").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: null,
      nextArrow: null,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });


// slick trusted company slider
$(document).ready(function () {
    $(".2nd-slider").slick({
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  });