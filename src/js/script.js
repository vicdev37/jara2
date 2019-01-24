
$(document).ready(function () {
  $(".tab_item").not(":first").hide();

  $(".wrapper .tab").click(function () {
    $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".tab_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


  $('.menu-icon').click(function(){
    $('.menu').toggle("active");
  });

  console.log('aaaaaaaaa')
  
  $('.sl').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   }
      // },
      // {
      //   breakpoint: 576,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   }
      // }
    ]
  });

  // $(document).ready(function () {
  //   $("#phone").mask("+7 (999) 999-99-99");
  // });

  // $('#form').validate({
  //   rules: {
  //     name: {
  //       required: true,
  //       name: true
  //     },
  //     tel: {
  //       required: true,
  //     }
  //   },
  //   messages: {
  //     name: {
  //       required: "Поле обязательно для заполнения"
  //     },
  //     phone: {
  //       required: "Поле обязательно для заполнения"
  //     },
  //   }
  // });

  $(".menu").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });



  $(".header-button").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  $(".header-mobile_button").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });


  // Отправка заявки 

  // $('#form').submit(function () { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
    
  //   if (document.form.name.value == '' || document.form.phone.value == '') {
  //     valid = false;
  //     return valid;
  //   }
  //   $.ajax({
  //     type: "POST",
  //     url: "./mail/mail.php",
  //     data: $(this).serialize()
  //   }).done(function () {
  //     $('.js-overlay-thank-you').fadeIn();
  //     $(this).find('input').val('');
  //     $('#form').trigger('reset');
  //   });
  //   return false;
  // });

  // Закрыть попап «спасибо»
  $('.js-close-thank-you').click(function () { // по клику на крестик
    $('.js-overlay-thank-you').fadeOut();
  });

  $(document).mouseup(function (e) { // по клику вне попапа
    var popup = $('.popup');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.js-overlay-thank-you').fadeOut();
    }
  });

  // Маска ввода номера телефона (плагин maskedinput)
  $(function ($) {
    $('[name="phone"]').mask("+7(999) 999-9999");
  });
})