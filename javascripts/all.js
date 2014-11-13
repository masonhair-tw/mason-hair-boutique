// off canvas menu switch
$(".menu-btn").click(function(){
  $("body").toggleClass("open-menu");
});

// appendaround
$(".hero, .page-header").appendAround();


// lightbox
$('.shop-photo').magnificPopup({
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-fade'
});

// slick slider
if ( $('#hero-slider').length != 0 ) {
  $('#hero-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    cssEase: 'ease-in-out',
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
  });
}

if ( $('.photo-slider').length != 0 ) {
   $('.photo-slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.photo-slider-nav'
  });
  $('.photo-slider-nav').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      asNavFor: '.photo-slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      autoplay: true,
      responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
}