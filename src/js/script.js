$(document).ready(function () {

	$(".tab_item").not(":first").hide();

	$(".wrapper .tab").click(function () {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	$('.menu-icon').click(function () {
		$('.menu').toggle("active");
	});


	$('.sl').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
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




	$(".menu, .header-button, .header-mobile_button").on("click", "a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({
			scrollTop: top
		}, 1500);
	});

	// Отправка заявки 

	$('#form').submit(function (evt) { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)

		console.log('Скрипт тоже работает!')
		// evt.preventDefault()

	});

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
	  $('[id="phone"]').mask("+7(999) 999-99-99");
	});

	$('.menu-btn').on('click', function (e) {
		e.preventDefault;
		$(this).toggleClass('menu-btn_active');
		$('.menu-mobile').toggleClass('menu-mobile_active');
	});
	
	// var inp = document.getElementById("phone");

	// inp.onclick = function () {
	// 	inp.value = "+7(";
	// }

	// var old = 0;
	// inp.addEventListener('focus', _ => {
	// 		// Если там ничего нет или есть, но левое
	// 		if (!/^\+\d*$/.test(inp.value))
	// 			// То вставляем знак плюса ( '+7(' ) как значение
	// 			inp.value = '+7(';
	// 	});
	// inp.addEventListener('keypress', e => {
	// 	// Отменяем ввод не цифр
	// 	if (!/\d/.test(e.key))
	// 		e.preventDefault();
	// });

	// inp.onkeydown = function (event) {
	// 	var curLen = inp.value.length;

	// 	if (curLen < old) {
	// 		old--;
	// 		return;
	// 	}
		
		// if (curLen == 0)
		// 	inp.value = inp.value + "+7";

	// 	if (curLen == 2)
	// 		inp.value = inp.value + "(";

	// 	if (curLen == 6)
	// 		inp.value = inp.value + ")-";

	// 	if (curLen == 11)
	// 		inp.value = inp.value + "-";

	// 	if (curLen == 14)
	// 		inp.value = inp.value + "-";

	// 	if (curLen > 16)
	// 		inp.value = inp.value.substring(0, inp.value.length - 1);

	// 	old++;
	// }



})