// inView.js

$.fn.isInViewport = function(dist) {
	// top of element
	var elementTop = $(this).offset().top;
	// bottom of element
	var elementBottom = elementTop + $(this).outerHeight();
	// top of view
	var viewportTop = $(window).scrollTop();
	// bottom of view
	var viewportBottom = viewportTop + $(window).height();
	// return bool
	return elementBottom > viewportTop && elementTop < (viewportBottom - dist);
};