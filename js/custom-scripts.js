$(document).ready(function() {
   
	/* ========================================== 
	Navigation open/close functions
	========================================== */
	$('.navbar-toggler').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('body').toggleClass('nav-open');
	});
	$(document).keydown(function(e) {
		if (e.keyCode == 27) {
			$('body').removeClass('nav-open');
		}
	});
	$(document).mouseup(function(e) {
		var container = $(".navbar");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			$('body').removeClass('nav-open');
		}
	});

	$('.navbar li.dropdown').hover(function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	}, function() {
		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
	});

	/* ========================================== 
	Filter Bar open/close functions
	========================================== */
	var checkWidth = $(window).width();
	if (checkWidth < 767) {
		$(function() {
			$('#header .btn-search').on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				$('.filters').slideToggle('slow');
			});
			$(document).keydown(function(e) {
				if (e.keyCode == 27) {
					$('.filters').slideUp('slow');
				}
			});
			$(document).mouseup(function(e) {
				var container = $("#header");
				if (!container.is(e.target) && container.has(e.target).length === 0) {
					$('.filters').slideUp('slow');
				}
			});
		});
		$(function() {
			$('.btn-filter').on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				$('.filter-result').slideToggle('slow');
			});
			$(document).keydown(function(e) {
				if (e.keyCode == 27) {
					$('.filter-result').slideUp('slow');
				}
			});
		});
	}

	/* ========================================== 
	Slick Sliders
	========================================== */
	$('.text-slider').slick({
		speed: 500,
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		autoplaySpeed: 3000,
		prevArrow: "<button type='button' class='slick-prev'><i class='icon-angle-left'></i></button>",
		nextArrow: "<button type='button' class='slick-next'><i class='icon-angle-right'></i></button>"
	});

	$('.partners-slider').slick({
		speed: 500,
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		mobileFirst: true,
		autoplaySpeed: 3000,
		responsive: [{
			breakpoint: 1024,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 6,
					slidesToScroll: 1
				}
			},
			{ 
				breakpoint: 991,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.products-slider').slick({
		speed: 500,
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		autoplaySpeed: 3000,
		responsive: [{
			breakpoint: 1023,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 5,
					slidesToScroll: 1
				}
			},
			{ 
				breakpoint: 991,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 575,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})
	.on('setPosition', function (event, slick) {
		slick.$slides.css('height', slick.$slideTrack.height() + 'px');
	});

	$('.cat-slider').slick({
		speed: 500,
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		autoplaySpeed: 3000,
		responsive: [{
			breakpoint: 1023,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 4,
					centerMode: true,
					slidesToScroll: 1,
					centerPadding: '180px'
				}
			},
			{ 
				breakpoint: 991,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 575,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.testimonials-slider').slick({
		speed: 500,
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		autoplaySpeed: 3000,
		responsive: [{ 
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 575,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					dots: false,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	})
	.on('setPosition', function (event, slick) {
		slick.$slides.css('height', slick.$slideTrack.height() + 'px');
	});
	
	// Open / Close
	$(function() {
		$('.opener').on('click', function() {
			$(this).parents('.block').toggleClass('open');
		});
	});


	// Tooltip
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	// AOS Animations
	//refresh animations
	$(window).on('load', function() {
		AOS.refresh();
	});
	AOS.init();

});

$(window).bind("load resize scroll", function() {
	AOS.init();
	AOS.refresh();
});