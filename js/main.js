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


var myCarousel = document.getElementById('carouselExampleIndicators')

myCarousel.addEventListener('slid.bs.carousel', function () {
    $index = $('#carouselExampleIndicators .carousel-item.active').index() + 1;
    if($index <= 9){
      $index = '0' + $index;
    }
    $('.number-banner-slider .num-active').text($index);
})

$indexTotal = $('#carouselExampleIndicators .carousel-item').length;
if($indexTotal <= 9){
  $indexTotal = '0' + $indexTotal;
}
$('.number-banner-slider .num-total').text($indexTotal);
});
