$( document ).ready(function() {

$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
   dots: true,
   arrows: true,
   autoplaySpeed: 3500,
   speed: 1500,
   fade: true,
   cssEase: 'linear'
});
$('.slide_aboutus').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<i class="back text-dark ionicons ion-ios-arrow-left"></i>',
  nextArrow: '',
  // responsive: [{
  //     breakpoint: 576,
  //     settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //     }
  // }]
});
  
});
