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


$('.btn-bar').click(function(){
  $('.nav-header ul').toggleClass('show');
})

const menuBtn = document.querySelector('.btn-bar');
let menuOpen = false;
menuBtn.addEventListener('click', () => {

  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  }else{
    menuBtn.classList.remove('open');
    menuOpen = false;
  }

});

window.addEventListener('scroll', function(){
  let header = document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})

const btnScrolltoTop = document.querySelector('#btnScrolltoTop');
btnScrolltoTop.addEventListener('click', function(){
  $('html, body').animate({scrollTop: 0}, 'slow');
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
