//  Ivan Eremeev - 2021
//  Skype: ivan.eremeev_1
//  Telegram: IvanMessage
//  Email: ivan.frontcoder@gmail.com

$(document).ready(function () {

	// Брэйкпоинты js
	var	breakXl = 1400,
			breakLg = 1200,
			breakMd = 1025,
			breakSm = 769,
			breakXs = 500;
	
	//= libs-settings/slick_settings.js

	// Запрет перехода по ссылкам с хэшем
	// $('a[href="#"]').click(function(e) {
	// 	e.preventDefault();
	// });

	// Модальное окно
	function modal() {
		$('.modal-trigger').on('click', function() {
			var $this = $(this),
					data = $this.data('modal'),
					thisModal = $(data);
			modalShow(thisModal);
		});
	};
	// Открытие модального окна
	function modalShow(thisModal) {
		var modalClose = thisModal.find($('.js-modal_close'));
		thisModal.addClass('open');
		modalClose.on('click', function() {
			modalHide(thisModal);
		});
		thisModal.on('click', function(e) {
			if (thisModal.has(e.target).length === 0) {
				modalHide(thisModal);
			}
		});
	};
	// Закрытие модального окна
	function modalHide(thisModal) {
		thisModal.removeClass('open');
	};
	modal();

	// Выпадайки при клике по кнопке
	// Задать блокам выпадайкам .js-drop и айдишник совпадающий с data-drop="" в кнопке для этого блока
	// Задать кнопкам .js-drop-btn и data-drop="" с айдишником блока выпадайки
	function DropBlock(drop, button, overflow) {
		var html = $('html');
		button.on('click', function () { // клик по кнопке
			var $this = $(this),
					data = $this.data('drop');
			if (!$this.hasClass('is-active')) { // если имеет класс .active скрываем все выпадайки и открываем только относящуюся к кнопке
				drop.removeClass('open');
				button.removeClass('is-active');
				$this.addClass('is-active');
				$('#' + data).addClass('open');
				if (overflow) {
					html.addClass('lock');
				}
			} else { // если не имеет класс .active скрываем все выпадайки
				button.removeClass('is-active');
				drop.removeClass('open');
				if (overflow) {
					html.removeClass('lock');
				}
			}
		})
		$(document).mouseup(function (e) { // клик по любому месту страницы вне блока (скрываем все выпадайки)
			if (!drop.is(e.target)
				&& drop.has(e.target).length === 0
				&& !button.is(e.target)
				&& button.has(e.target).length === 0) {
				drop.removeClass('open');
				button.removeClass('is-active');
				if (overflow) {
					html.removeClass('lock');
				}
			}
		});
		$(window).resize(function () {
			if ($(window).width() >= breakSm) {
				html.removeClass('lock');
			}
		})
	}
	DropBlock($('.js-drop'), $('.js-drop-btn'), true);
	DropBlock($('.js-drop-filters'), $('.js-drop-btn-filters'), false);

	// ToolTipster || Всплывающая подсказка
	if ($('.tooltip').length) {
		$('.tooltip').tooltipster({
			theme: 'tooltipster-shadow',
		});
	}

});