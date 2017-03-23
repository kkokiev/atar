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
	
	var $body = $('body');

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

})(jQuery);
