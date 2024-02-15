/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse() {
    var startDate = new Date("February 10, 2024 19:28:00");
    var currentDate = new Date();
    var millisecondsDiff = currentDate - startDate;

    var seconds = Math.floor(millisecondsDiff / 1000);
    var years = Math.floor(seconds / (365 * 24 * 3600));
    seconds -= years * 365 * 24 * 3600;
    var days = Math.floor(seconds / (24 * 3600));
    seconds -= days * 24 * 3600;
    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    // Format the result
    var result = "<span class=\"digit\">" + years + " years <span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds";
    $("#clock").html(result);
}

// Call the function initially to update the time elapsed
timeElapse();

// Update the time every second
setInterval(timeElapse, 1000);
