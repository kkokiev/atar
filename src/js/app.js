//Common scripts

//ie fix
if(!(window.console && console.log)) {
	console = {
		log: function(){},
		debug: function(){},
		info: function(){},
		warn: function(){},
		error: function(){}
	};
}


(function () {
	
	var $body = $('body'),
	$navBtn = $('#nav-btn'),
	$navbar = $('#navbar');


	/*
		setup navigation
	*/
	$navBtn.on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('nav-btn_opened');
		$navbar.stop().slideToggle();
	});

	$body.on('click', function(){
		$navBtn.removeClass('nav-btn_opened');
		$navbar.stop().slideUp();
	});

	$body.on('click', '#nav-btn, #navbar', function (event) {
		event.stopPropagation();
	});


	/*
		setup sliders
	*/
	$('.js-slider').bxSlider({
		mode: 'fade',
		pager: false
	});

	// var testMobile;
	// var isMobile = {
	// 	Android: function() {
	// 		return navigator.userAgent.match(/Android/i);
	// 	},
	// 	BlackBerry: function() {
	// 		return navigator.userAgent.match(/BlackBerry/i);
	// 	},
	// 	iOS: function() {
	// 		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	// 	},
	// 	Opera: function() {
	// 		return navigator.userAgent.match(/Opera Mini/i);
	// 	},
	// 	Windows: function() {
	// 		return navigator.userAgent.match(/IEMobile/i);
	// 	},
	// 	any: function() {
	// 		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	// 	}
	// };


	/*
		setup header
	*/
	var handleHeaderClass = function() {
		var scroll = $(window).scrollTop();
		var $header = $('#header');
		if (scroll > 0) {
			$header.addClass("header_scrolled");
		} else {
			$header.removeClass("header_scrolled");
		}
	};

	$(window).on('scroll', function(){
		handleHeaderClass();
	});

	$(window).on('load', function(){
		handleHeaderClass();
	});


	/*
		smooth scroll
	*/
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

			if (target.length)
			{	

				$('html,body').animate({
					scrollTop: target.offset().top - 61
				}, 1000);
				return false;

			}
		}
	});
	

})(jQuery);
