// cardOverlay.js

$(document).ready(function() {
	$(window).load(function() {
		$('.card').each(function() {
			$(this).click(function() {
				// slide down overlay
				$(this).children().slideDown();
				// set overlay display to flex for positioning - default = none
				$(this).children().css('display','flex');
			});

			$(this).on('mouseleave', function() {
				// slide up overlay
				$(this).children().slideUp();
			});
		});
	});
});