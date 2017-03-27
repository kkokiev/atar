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
	$('.main-menu > li > a').on('click', function() {
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
	});

	$('.js-popup-close').on( "click", function(e) {
		e.preventDefault();
		$.magnificPopup.close();
	});


	function initMap(){

		var isDraggable = document.body.clientWidth > 480 ? true : false;

		var point = new google.maps.LatLng(31.810653, 34.645879);

		var myMapOptions = {
			zoom: 16,
			zoomControl: false,
			center: point,
			disableDoubleClickZoom: false,
			mapTypeControl: false,
			scaleControl: false,
			scrollwheel: false,
			panControl: true,
			streetViewControl: false,
			draggable : isDraggable,
			overviewMapControl: true,
			overviewMapControlOptions: {
				opened: false,
			},
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			zoomControl: false,
			scaleControl: false,
			scrollwheel: false
		};

		var map = new google.maps.Map(document.getElementById("google-map"),myMapOptions);

		/*
			setup overlay
			more info https://developers.google.com/maps/documentation/javascript/shapes#polylines
		*/
		var borderCoordinates = [
			//just example
			// {lat: 32.054645, lng: 34.768382},
			// {lat: 32.057409, lng: 34.769927},
			// {lat: 32.052335, lng: 34.769304},
			// {lat: 32.054645, lng: 34.768382}
		];

		var borderPath = new google.maps.Polygon({
			path: borderCoordinates,
			strokeColor: '#df4c4b',
			strokeOpacity: 1.0,
			strokeWeight: 2,
			fillColor: '#df4c4b',
			fillOpacity: .5
		});

		borderPath.setMap(map);

	};

	initMap();


})(jQuery);
