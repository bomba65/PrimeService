$( document ).ready(function() {

  $(document).ready(function() {
    $('.popup-video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false
    });
  });

  var arrowPrev = '<img class="prev-arrow" src="assets/img/tail-left.svg" />';
  var arrowNext = '<img class="next-arrow" src="assets/img/tail-right.svg" />';

  $('.main-slider').slick({
    arrows: false,
    dots: false,
    draggable: false,
    swipe: false,
    fade: true,
    touchMove: false,
    autoplay: true,
    autoplaySpeed: 8000,
    prevArrow: arrowPrev,
    nextArrow: arrowNext
  });

  $('.main-slider .slider-arrow.slider-arrow-next').click(function () {
    $('.main-slider').slick('slickNext');
  });
  $('.main-slider .slider-arrow.slider-arrow-prev').click(function () {
    $('.main-slider').slick('slickPrev');
  });

  $('.portfolio-list').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: arrowPrev,
    nextArrow: arrowNext,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          slidesToShow: 2,
        }
      }
    ],
    responsive: [
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.reviews').slick({
    arrows: false,
    dots: false,
    draggable: false,
    swipe: false,
    fade: true,
    touchMove: false,
    autoplay: true,
    autoplaySpeed: 8000,
    prevArrow: arrowPrev,
    nextArrow: arrowNext
  });

  $('.reviews .slider-arrow.slider-arrow-next').click(function () {
    $('.reviews').slick('slickNext');
  });
  $('.reviews .slider-arrow.slider-arrow-prev').click(function () {
    $('.reviews').slick('slickPrev');
  });

  $('input[name="phoneNumber"]').inputmask("+9 (999) 999 99 99");

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
        ) {

        if($('.navbar-collapse').hasClass('show')) {
          $(this).parents('.navbar-collapse').collapse('hide');
        };
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();

          $('html, body').animate({
            scrollTop: target.offset().top -49
          }, 1000)
          return false;
        }
      }
    });
  });

var hero
, sections = $('section')
, nav = $('nav');

$(window).on('scroll', function () {
  var nav_height = nav.outerHeight();
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height-1,
    bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').parent().removeClass('active');
      sections.removeClass('active');

      $(this).parent().addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
});


$(document).ready(function () {
    $('#form-request').submit(function(e) {
        e.preventDefault();
        var nameElement = this.elements.name;
        var phoneElement = this.elements.phoneNumber;
        var commentElement = this.elements.comment;
        var name = nameElement.value.trim();
        var phone = phoneElement.value.trim();
        var comment = commentElement.value.trim();

        var valid = true;
        if (name === '') {
            nameElement.classList.add('no-valid');
            valid = false;
        } else {
            nameElement.classList.remove('no-valid');
        }
        if (phone.indexOf('_') === -1) {
            phoneElement.classList.add('no-valid');
            valid = false;
        } else {
            phoneElement.classList.remove('no-valid');
        }
        if (comment === '') {
            commentElement.classList.add('no-valid');
            valid = false;
        } else {
            commentElement.classList.remove('no-valid');
        }

        if (!valid) return;
        
        var formData = $(this).serialize();
        var form = this;
    
        $.ajax({
            type: 'POST',
            url: 'mail.php',
            data: formData,
            async: true,
            beforeSend: function() {
              $('.ajax-status').html('Отправляем');

              $(form).attr('disabled', true);
              $(form.elements).attr('disabled', true);
            },
            success: function(data) {
              $(form).attr('disabled', false);
              $(form.elements).attr('disabled', false);
              $('.ajax-status').html('Заявка отправлена');
            },
            error: function(xhr, status, error){
                console.log(xhr);
            }
        });
    });
});