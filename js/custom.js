$(function () {

  // hide show 
  $(".search").hide()

  $(".searchShow").click(function () {
    $(".search").toggle(500)
  })

  // slick slider 

  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    prevArrow: '<i class="fa-solid fa-angle-right rightA"></i>',
    nextArrow: '<i class="fa-solid fa-angle-left leftA"></i>',
    // slider breckpoint 

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        
        }
      },


    ]



  });





  // wow js 
  new WOW().init();
  // product slider 
  $('.product').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    rows: 2,
    prevArrow: '<i class="fa-solid fa-angle-right right"></i>',
    nextArrow: '<i class="fa-solid fa-angle-left left"></i>',
    // slider breckpoint 

    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
          dots:false,
          arrows:false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 4,
          dots:false,
          arrows:false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 4,
          dots:false,
          arrows:false,
        }
      },

    ]


  });

// navbar 



//  Sticky Header  js
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  
  if(scrolling > 200){
      $('.navbar').addClass('my_stick_bg');
  }
  else {
       $('.navbar').removeClass('my_stick_bg');
  }
  });  


// blog slider 
$('.blog').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows:true,
  prevArrow: '<i class="fa-solid fa-angle-right rightb"></i>',
  nextArrow: '<i class="fa-solid fa-angle-left leftb"></i>',
  // slider breckpoint 

  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
 

      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
 

      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
 

      }
    },
  ]



});




// blog lazy slider 
$('.lazy').slick({
  slidesToShow: 6,
  slidesToScroll: 3,
  autoplay: true,
  arrows:false,
  autoplaySpeed: 2000,

  // slider breckpoint 

  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,

      }
    },

  ]



});
// blog slider end 













});