//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};
let spinner = document.querySelector("#spinner");

document.addEventListener("DOMContentLoaded",function(){
  spinner.style.display = "none";
  setTimeout(function(){
    spinner.style.display = "block";
  }3000);
})
function scrollFunction() {
	if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: false,
		margin: 10,
		nav: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
			},
		},
	});
});
