// scrollAnimation.js

$(document).ready(function() {
    $(window).load(function() {
        $(window).on('scroll', function() {
            $('.animateContent').each(function() {
                // if element is in view
				if ($(this).isInViewport(0)) {
					// if element doesn't have class toggled
					if ($(this).hasClass('toggled') == false) {
						// animate...
						// add toggled class
						$(this).addClass('toggled');
                        // add animateUp class
                        $(this).addClass('animateUp');
                    }
                }
            })
        })
    })
})