// tab.js

$(document).ready(function() {
	// force window to top of page on refresh
	$(this).scrollTop(0);

	$(window).load(function() {
		$(window).on('scroll', function() {
			$('.tab').each(function() {
				// if element is in view
				if ($(this).isInViewport(0)) {
					// if element doesn't have class toggled
					if ($(this).hasClass('toggled') == false) {
						// animate...
						// add toggled class
						$(this).addClass('toggled');
						// window width
						var windowWidth = $(window).width();
						// element width
						var elementWidth = $(this).width();
						// position (+50 for padding)
						var position = windowWidth - (elementWidth + 50);
						// animation
						$(this).css("transform", ("translateX(" + position + "px)"));
					}
				}
			});
		});

		// to reposition the tab on resize of window
		$(window).on('resize', function() {
			// if an untoggled tab ends up being pushed into viewport on resize
			$('.tab').each(function() {
				// if element is in view
				if ($(this).isInViewport(0)) {
					// add class toggled
					$(this).addClass('toggled');
				}
			});

			// animate each tab that is already toggled
			$('.tab.toggled').each(function() {
				// window width
				var windowWidth = $(window).width();
				// element width
				var elementWidth = $(this).width();
				// position (+50 for padding)
				var position = windowWidth - (elementWidth + 50);
				// animation
				$(this).css("transform", ("translateX(" + position + "px)"));
			});
		});
	});
});