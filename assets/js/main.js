

// Back to Top

$(document).ready(function() {


   $(window).scroll(function() {

    if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();

        $('html, body').animate({scrollTop: 0}, 300);
    });


  $('#brand, #brand').removeClass('hidden');
  $('#brand, #brand').addClass('animated fadeIn');



  $('#landing, .triangle').removeClass('hidden');
  $('#landing, .triangle').addClass('animated fadeIn');

  $('#summary .heading').removeClass('hidden');
  $('#summary .heading').addClass('animated zoomIn');


  $('#featured').removeClass('hidden');
  $('#featured').addClass('animated fadeIn');

  $('#faq-nav a').smoothScroll();

  $('#agenda-nav a').smoothScroll();




});


