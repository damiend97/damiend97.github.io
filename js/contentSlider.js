// // contentSlider.js

// $(document).ready(function() {
// 	$(window).load(function() {
// 		$(window).scroll(function() {
// 			$('.col').each(function() {
// 				// if circle is in viewport
// 				if ($(this).isInViewport(200) == true) {
// 					// if animation hasn't already happened
// 					if( $(this).hasClass('toggled') == false ) {
// 						// slide down content box
// 						$(this).children().slideDown(1500);
// 						// set content display to flex - default = none
// 						$(this).children().css('display','flex');
// 						// add class toggled
// 						$(this).addClass('toggled');
// 					}
// 				}
// 			});
// 		});
// 	});
// });