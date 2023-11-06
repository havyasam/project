(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonial carousel
    $(".testimonial-carousel-1").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-2").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

})(jQuery);

let valueDisplays = document.querySelectorAll(".num");
let interval = 8000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});


/****scroll reveal */
ScrollReveal({ 
    reset: true ,
    distance:'180px',
    duration:2000,
    delay:50                 
});
ScrollReveal().reveal(' .bounceInUp .vision',{delay:600,origin:'left',interval:200});
ScrollReveal().reveal(' .bounceInUp .ourstat',{delay:600,origin:'bottom',interval:200});
ScrollReveal().reveal(' .about .bounceInUp .mission',{delay:600,origin:'right',interval:200});
ScrollReveal().reveal(' .vasu',{delay:600,origin:'right',interval:200});
ScrollReveal().reveal(' .pad',{delay:600,origin:'left',interval:200});
ScrollReveal().reveal(' .kamath',{delay:600,origin:'right',interval:200});
ScrollReveal().reveal(' .padma',{delay:600,origin:'left',interval:200});
ScrollReveal().reveal(' .games',{delay:600,origin:'right',interval:200});
ScrollReveal().reveal(' .library',{delay:600,origin:'left',interval:200});
ScrollReveal().reveal(' .canteen',{delay:600,origin:'right',interval:200});
ScrollReveal().reveal(' .college',{delay:600,origin:'left',interval:200});
ScrollReveal().reveal(' .labs',{delay:600,origin:'right',interval:200});
ScrollReveal().reveal(' .ground',{delay:600,origin:'left',interval:200});
ScrollReveal().reveal(' .env',{delay:600,origin:'right',interval:200});
ScrollReveal().reveal(' .uni',{delay:600,origin:'left',interval:200});
ScrollReveal().reveal(' .skill',{delay:600,origin:'right',interval:200});
ScrollReveal().reveal(' .offer',{delay:600,origin:'left',interval:200});
ScrollReveal().reveal(' .our',{delay:600,origin:'right',interval:200});
ScrollReveal().reveal(' .place',{delay:600,origin:'left',interval:200});
