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
	$navbar = $('#navbar'),
	$googleMap = $('#google-map');


	/*
		setup navigation
	*/
	$navBtn.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('nav-btn_opened');
		$navbar.stop().slideToggle();
	});

	$body.on('click', function() {
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

	$(window).on('scroll', function() {
		handleHeaderClass();
	});

	$(window).on('load', function() {
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


	/*setup magnific-popup*/
	$('.js-table-popup').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.js-popup-close').on( "click", function(e) {
		e.preventDefault();
		$.magnificPopup.close();
	});


})(jQuery);

