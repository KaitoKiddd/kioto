$(document).ready(function() {
  var stickyNavTop = $('.nav').offset().top;

  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $('.nav').addClass('sticky');
    } else {
      $('.nav').removeClass('sticky');
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });
});

/*Funciones para scroll*/

$(document).ready(function() {
  $('html, body').animate({
    scrollTop: $(".starthit").offset().top
  }, 1000);
});

$(document).ready(function() {
  $('#itemcontact').click(function() {
    $('html, body').animate({
      scrollTop: $('.contacthit').offset().top
    }, 2000);
  });
});

$(document).ready(function() {
  $('#itemtravel').click(function() {
    $('html, body').animate({
      scrollTop: $('.travelhit').offset().top
    }, 2000);
  });
});

$(document).ready(function() {
  $('#itemstart').click(function() {
    $('html, body').animate({
      scrollTop: $('.starthit').offset().top
    }, 1000);
  });
});

/* Gracias Javier Torrús */

/*Función para que detecte cuando el elemento que quieres cambiarle el color detecta que está encima de otro elemento en concreto*/

$(document).ready(function() {
  var scroll_start = 0; /*var para calcular del scroll*/
  var startchange = $('#black');
  var startchange2 = $('#black2'); /*var para almacenar elemento donde tenemos que comparar la posición*/
  var startchange3 = $('#white2');
  var offset = startchange.offset(); /*coordenadas del elemento almacenado en la var startchange*/
  var offset2 = startchange2.offset();
  var offset3 = startchange3.offset();


  if (startchange.length) {
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset.top) { /*si nuestro scroll se ha pasado del límite de cordenadas cambiamos los colores a blanco*/
        $(".dynamic").css('color', '#f2f3f4');
        $(".underline").css('border-bottom', '2px solid #f2f3f4');
      } else { /*si no pues negro*/
        $('.dynamic').css('color', '#04040b');
        $(".underline").css('border-bottom', '2px solid #04040b');
      }
    });
  }

  if (startchange3.length) {
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset3.top) { /*si nuestro scroll se ha pasado del límite de cordenadas cambiamos los colores a blanco*/
        $('.dynamic').css('color', '#04040b');
        $(".underline").css('border-bottom', '2px solid #04040b');
      }
    });
  }

  if (startchange2.length) {
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if (scroll_start > offset2.top) { /*si nuestro scroll se ha pasado del límite de cordenadas cambiamos los colores a blanco*/
        $(".dynamic").css('color', '#f2f3f4');
        $(".underline").css('border-bottom', '2px solid #f2f3f4');
      }
    });
  }
});
