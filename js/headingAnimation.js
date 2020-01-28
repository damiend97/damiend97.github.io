// headingAnimation.js

$(document).ready(function() {
	$(window).load(function() {
		setTimeout(function() {
			$('#coverOverlay h1').fadeIn(1000);
		}, 1000);

		setTimeout(function() {
			$('#coverOverlay h2').fadeIn(1000);
		}, 2000);

		setTimeout(function() {
			// only start nav animation if nav hasn't been clicked
			if($('nav').hasClass('clicked') == false) {
				$('nav').toggleClass('navAnimation');
			}
		}, 3000);
	});
});