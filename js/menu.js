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
    
    // Slider Product 1
    
    var productCarousel = document.getElementById('carouselProduct')
    
    productCarousel.addEventListener('slid.bs.carousel', function () {
        $indexPro = $('#carouselProduct .carousel-item.active').index() + 1;
        if($indexPro <= 9){
          $indexPro = '0' + $indexPro;
        }
        $('.number-product-slider .num-active').text($indexPro);
    })
    
    $indexProTotal = $('#carouselProduct .carousel-item').length;
    if($indexProTotal <= 9){
      $indexProTotal = '0' + $indexProTotal;
    }
    $('.number-product-slider .num-total').text($indexProTotal);
    
    // Slider Product 2
    
    var productCarousel = document.getElementById('carouselProduct2')
    
    productCarousel.addEventListener('slid.bs.carousel', function () {
        $indexPro = $('#carouselProduct2 .carousel-item.active').index() + 1;
        if($indexPro <= 9){
          $indexPro = '0' + $indexPro;
        }
        $('.number-product2-slider .num-active').text($indexPro);
    })
    
    $indexProTotal = $('#carouselProduct2 .carousel-item').length;
    if($indexProTotal <= 9){
      $indexProTotal = '0' + $indexProTotal;
    }
    $('.number-product2-slider .num-total').text($indexProTotal);
    
    // Slider Product 3
    
    var productCarousel = document.getElementById('carouselProduct3')
    
    productCarousel.addEventListener('slid.bs.carousel', function () {
        $indexPro = $('#carouselProduct3 .carousel-item.active').index() + 1;
        if($indexPro <= 9){
          $indexPro = '0' + $indexPro;
        }
        $('.number-product3-slider .num-active').text($indexPro);
    })
    
    $indexProTotal = $('#carouselProduct3 .carousel-item').length;
    if($indexProTotal <= 9){
      $indexProTotal = '0' + $indexProTotal;
    }
    $('.number-product3-slider .num-total').text($indexProTotal);
    
    
    
    });
    