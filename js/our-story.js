$( document ).ready(function() {
    
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

$(window).scroll(function() {
  var hT = $('.story-desc-percent').offset().top,
      hH = $('.story-desc-percent').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
   console.log((hT-wH) , wS);
  if (wS > (hT+hH-wH)){
    $(function() {
      $('.chart').easyPieChart({
          barColor: '#c3a281',
          trackColor: '',
          scaleColor: '',
          lineCap: 'round',
          lineWidth: 3,
          size: 125,
          animate: 3000,
          onStart: $.noop,
          onStop: $.noop
      });
    });
  }
});


    