$( document ).ready(function() {

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
  let pageTop = document.querySelector('#btnScrolltoTop');
  let windowPosition = window.scrollY > 80;
  header.classList.toggle('scrolling-active', windowPosition);
  pageTop.classList.toggle('active', windowPosition);
})

const btnScrolltoTop = document.querySelector('#btnScrolltoTop');
btnScrolltoTop.addEventListener('click', function(){
  $('html, body').animate({scrollTop: 0}, 'slow');
});

//Slider Banner 

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


// Slider Product
$('.nav-item').each(function (index) {
    var productCarousel = document.getElementById(`carouselProduct${index + 1}`)

    productCarousel.addEventListener('slid.bs.carousel', function () {
      $indexPro = $(`#carouselProduct${index + 1} .carousel-item.active`).index() + 1
      console.log($indexPro)
      if ($indexPro <= 9) {
        $indexPro = '0' + $indexPro
      }
      $(`.number-product${index + 1}-slider .num-active`).text($indexPro)
    })

    $indexProTotal = $(`#carouselProduct${index + 1} .carousel-item`).length
    if ($indexProTotal <= 9) {
      $indexProTotal = '0' + $indexProTotal
    }
    $(`.number-product${index + 1}-slider .num-total`).text($indexProTotal)
  })

});
