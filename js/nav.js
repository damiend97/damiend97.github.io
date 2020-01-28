// nav.js

$(document).ready(function(){
	$(window).load(function() {
		$('nav').click(function() {
			// stop animation if clicked
			$(this).removeClass('navAnimation');
			// open navigation
			$(this).addClass('open');
			// add class clicked to further prevent animation
			$(this).addClass('clicked');
			// show menu content
			$('#menu').addClass('show');
		});

		$('.closeButton').click(function(e) {
			// close nav
			$('nav').removeClass('open');
			// hide menu
			$('#menu').removeClass('show');
			e.stopPropagation();
		});

		$('#menu a').click(function(e) {
			// close nav
			$('nav').removeClass('open');
			// hide menu
			$('#menu').removeClass('show');
			e.stopPropagation();
		});
	});
});