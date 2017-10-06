$(document).ready(function() {
	
/*
	screen.addEventListener("orientationchange", function () {
	  console.log("The orientation of the screen is: " + screen.orientation);
	});

	Screen Orientation API only available on FireFox

*/

	var landing = "http://leeeya.com/me2math/landing.html";
	if (window.location.href != landing){
		$("body").css({
			"background-image": "none",
			"background-color": "rgba(238, 66, 102, 1)",
			"color": "#f8f8f8",
			"font-family": "azote",
			"padding": "0px",
			"overflow-y": "hidden"
		})
	};




});
