
$(document).ready(function () {
 $("a.photo").fancybox({
  transitionIn: 'elastic',
  transitionOut: 'elastic',
  speedIn: 500,
  speedOut: 500
 });
});

$(".tab_item").not(":first").hide();

 $(".wrapper .tab").click(function () {
  $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$('.menu-icon').click(function(){
  $('.menu').toggle("active");
 });

var element = document.getElementById('phone');
var maskOptions = {
  mask: 'Ваш номер +7(000)000-00-00',
  lazy: false
}
var mask = new IMask(element, maskOptions);

const button = $('.form-button input');
const form = $('.form')
const overlay = $('.overlay');
const closePopup = $('.close-popup');

// button.click((evt) => {
// 	evt.preventDefault();
//  overlay.addClass('open');
// })

// closePopup.click(() => {
// 	overlay.removeClass('open');
// });

// Отправка заявки 
$(document).ready(function () {
	$('#form').submit(function () { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
		if (document.form.name.value == '' || document.form.phone.value == '') {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function () {
			$('.js-overlay-thank-you').fadeIn();
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
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


