(function ($) {
 	"use strict";

 	var $constrom_window = $(window);

 	// :: Preloader Active Code
 	$constrom_window.on('load', function () {
 		$('#preloader').fadeOut('slow', function () {
 			$(this).remove();
 		});
 	});

 	// ****************************
 	// :: TOP Menu Active Code
 	// ****************************

 	$(window).on('scroll load resize', function () {
 		var scroll = $(window).scrollTop();
 		if (scroll < 400) {
 			$("#sticky-header").removeClass("sticky");
 			$('#back-top').fadeIn(700);
 		} else {
 			$("#sticky-header").addClass("sticky");
 			$('#back-top').fadeIn(700);
 		}
 	});

 	// ****************************
 	// :: Mobile Menu Active Code
 	// ****************************

 	// mobile_menu
 	var menu = $('ul#navigation');
 	if (menu.length) {
 		menu.slicknav({
 			prependTo: ".mobile_menu",
 			closedSymbol: '+',
 			openedSymbol: '-'
 		});
 	};

 	$(document).ready(function () {

 		// ***********************
 		// :: Scrollup Active Code
 		// ***********************

 		if ($.fn.scrollUp) {
 			$constrom_window.scrollUp({
 				scrollSpeed: 1000,
 				scrollText: '<i class="bx bx-chevron-up"></i>'
 			});
 		}

 		// *****************************
 		// :: Welcome Slides Active Code
 		// *****************************

 		if ($.fn.owlCarousel) {
 			var welcomeSlider = $('.hero-slider');
 			welcomeSlider.owlCarousel({
 				items: 1,
 				loop: true,
 				rtl: true,
 				autoplay: true,
 				smartSpeed: 1000,
 				autoplayTimeout: 5000,
 				navText: ['<i class="ti-angle-right"></i>', '<i class="ti-angle-left"></i>'],
 				nav: true,
 				dots: true
 			})

 			welcomeSlider.on('translate.owl.carousel', function () {
 				var layer = $("[data-animation]");
 				layer.each(function () {
 					var anim_name = $(this).data('animation');
 					$(this).removeClass('animated ' + anim_name).css('opacity', '0');
 				});
 			});

 			$("[data-delay]").each(function () {
 				var anim_del = $(this).data('delay');
 				$(this).css('animation-delay', anim_del);
 			});

 			$("[data-duration]").each(function () {
 				var anim_dur = $(this).data('duration');
 				$(this).css('animation-duration', anim_dur);
 			});

 			welcomeSlider.on('translated.owl.carousel', function () {
 				var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
 				layer.each(function () {
 					var anim_name = $(this).data('animation');
 					$(this).addClass('animated ' + anim_name).css('opacity', '1');
 				});
 			});
 		}

 		// ************************************
 		// :: CLient Slides Active Code
 		// ************************************

 		if ($.fn.owlCarousel) {
 			var clientArea = $('.client-silder');
 			clientArea.owlCarousel({
 				items: 2,
 				loop: true,
 				rtl: true,
 				autoplay: false,
 				smartSpeed: 1500,
 				margin: 30,
 				nav: true,
 				navText: ["<i class='ti-angle-right'</i>", "<i class='ti-angle-left'</i>"],
 				dots: false,
 				responsive: {
 					0: {
 						items: 1
 					},
 					768: {
 						items: 1
 					}
 				}
 			});
 		}

 		// ************************************
 		// :: CLient Slides Active Code
 		// ************************************

 		if ($.fn.owlCarousel) {
 			var clientArea2 = $('.client-silder-2');
 			clientArea2.owlCarousel({
 				items: 1,
 				loop: true,
 				rtl: true,
 				autoplay: true,
 				smartSpeed: 1500,
 				margin: 30,
 				dots: true,
 				responsive: {
 					0: {
 						items: 1
 					}
 				}
 			});
 		}

 		// ************************************
 		// :: Flexible Slides Active Code
 		// ************************************

 		if ($.fn.owlCarousel) {
 			var flexiblesilder = $('.flexible-silder');
 			flexiblesilder.owlCarousel({
 				items: 4,
 				loop: true,
 				rtl: true,
 				autoplay: true,
 				smartSpeed: 1500,
 				margin: 30,
 				dots: true,
 				responsive: {
 					0: {
 						items: 1
 					},
 					576: {
 						items: 2
 					},
 					768: {
 						items: 2
 					},
 					992: {
 						items: 3
 					},
 					1200: {
 						items: 4
 					},
 				}
 			});
 		}

 		// ************************************
 		// :: Partner Slides Active Code
 		// ************************************

 		if ($.fn.owlCarousel) {
 			var parnetArea = $('.partner-carousel');
 			parnetArea.owlCarousel({
 				items: 5,
 				loop: true,
 				rtl: true,
 				autoplay: true,
 				smartSpeed: 1500,
 				margin: 30,
 				dots: true,
 				responsive: {
 					0: {
 						items: 1
 					},
 					576: {
 						items: 2
 					},
 					768: {
 						items: 3
 					},
 					992: {
 						items: 5
 					},
 				}
 			});
 		}

 		// ****************************
 		// :: Features-slider Active Code
 		// ***************************

 		if ($.fn.owlCarousel) {
 			var feature = $('.features-slider');
 			feature.owlCarousel({
 				items: 1,
 				loop: true,
 				rtl: true,
 				autoplay: true,
 				smartSpeed: 800,
 				margin: 20,
 				responsive: {
 					0: {
 						items: 1
 					},
 					480: {
 						items: 1
 					},
 					768: {
 						items: 1
 					}
 				}
 			});
 		}

 		// ******************************
 		// :: App shot slider Active Code
 		// ******************************

 		$('.app-shot').slick({
 			slidesToShow: 4,
 			slidesToScroll: 1,
 			rtl: true,
 			autoplay: true,
 			speed: 2000,
			autoplaySpeed: 1500,
			prevArrow:'<button class="slick-prev" aria-label="قبلی" type="button">قبلی</button>',
			nextArrow:'<button class="slick-next" aria-label="بعدی" type="button">بعدی</button>',

 			responsive: [{
 					breakpoint: 992,
 					settings: {
 						slidesToShow: 2,
 						slidesToScroll: 1
 					}
 				},
 				{
 					breakpoint: 480,
 					settings: {
 						slidesToShow: 1,
 						slidesToScroll: 1
 					}
 				},

 			]
 		});

 		// ***************************************
 		// :: 11.0 Masonary Gallery Active Code
 		// ****************************************

 		if ($.fn.imagesLoaded) {
 			$('.reen-portfolio').imagesLoaded(function () {
 				// filter items on button click
 				$('.portfolio-menu').on('click', 'button', function () {
 					var filterValue = $(this).attr('data-filter');
 					$grid.isotope({
 						filter: filterValue
 					});
 				});
 				// init Isotope
 				var $grid = $('.reen-portfolio').isotope({
 					itemSelector: '.single_gallery_item',
 					percentPosition: true,
 					originLeft: false,
 					masonry: {
 						columnWidth: '.single_gallery_item'
 					}
 				});
 			});
 		}

 		// :: Gallery Menu Style Active Code
 		$('.portfolio-menu button.btn').on('click', function () {
 			$('.portfolio-menu button.btn').removeClass('active');
 			$(this).addClass('active');
 		})

 		// **********************
 		// :: Wow js Active Code
 		// **********************

 		if ($constrom_window.width() > 767) {
 			new WOW().init();
 		}

 		// *************************
 		// :: Counter Up Active Code
 		// *************************

 		if ($.fn.counterUp) {
 			$('.counter').counterUp({
 				delay: 10,
 				time: 1500
 			});
 		}

 		// *************************
 		// :: Wow Aos Active Code
 		// *************************

 		if ($.fn.init) {
 			AOS.init();
 		}

 		// *************************************
 		// :: MagnificPopup img view Active Code
 		// *************************************

 		$.extend(true, $.magnificPopup.defaults, {
			tClose: "بستن",
			tLoading: "در حال بارگذاری ...",
			gallery: {
				tPrev: 'قبلی',
				tNext: 'بعدی',
				tCounter: '%curr% از %total%'
			},
			image: {
				tError: '<a href="%url%">تصویر</a> بارگذاری نشد.'
			},
			ajax: {
				tError: '<a href="%url%">درخواست</a> ناموفق بود.'
			}
		});

 		if ($.fn.magnificPopup) {
 			$('#videobtn').magnificPopup({
 				type: 'iframe'
 			});
 			$('.gallery_img').magnificPopup({
 				type: 'image',
 				gallery: {
 					enabled: true
 				},
 				removalDelay: 300,
 				mainClass: 'mfp-fade',
 				preloader: true
 			});
 		}

 	});

 	// ****************************
 	// :: Countdown Active Code
 	// ****************************
	 
	 if ($.fn.countdown) {
 		$("#clock").countdown("2022/12/10", function (event) {
 			$(this).html(event.strftime("<div>%D <span>روز</span></div> <div>%H <span>ساعت</span></div> <div>%M <span>دقیقه</span></div> <div>%S <span>ثانیه</span></div>"));
 		});
 	}

 	// *********************************
 	// :: Prevent Default 'a' Click
 	// *********************************
	 
	$('a[href="#"]').on('click', function ($) {
 		$.preventDefault();
 	});

 	// *********************************
 	// :: Custom form messages
 	// *********************************

	$('input[required], textarea[required]').on('invalid', function () {
		this.setCustomValidity('وارد کردن این قسمت الزامی است');
	});
	
	$('input[type="email"]').on('invalid', function () {
		if (this.validity.typeMismatch) {
			this.setCustomValidity("لطفا یک ایمیل معتبر وارد نمایید");
		}
	});
	
	$('input[required], textarea[required], input[type="email"]').on('input', function () {
		this.setCustomValidity('');
	});

})(jQuery);
 