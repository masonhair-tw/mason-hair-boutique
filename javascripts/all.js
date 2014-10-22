// off canvas menu switch
$(".menu-btn").click(function(){
  $("body").toggleClass("open-menu");
});

// bs carousel
$('.carousel').carousel();

// lightbox
$('.shop-photo').magnificPopup({
  type: 'image',
  removalDelay: 300,
  mainClass: 'mfp-fade'
});