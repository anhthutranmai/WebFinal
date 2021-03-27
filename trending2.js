let init = [
  [
    'a or b ?',
    'a',
    'b'
  ],
  [
    'c, d?',
    'c',
    'd'
  ],
  [
    'e, f?',
    'e',
    'f'
  ]
]

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
		loop: true,
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

//init polls in

function exec() {
  for (var i = 0; i < init.length; i++) {
    if (this.innerHTML == init[i][0]){
      console.log(this.innerHTML);
      localStorage.setItem("array",JSON.stringify(init[i]));
    }
  }
}


// exec();
let where = document.getElementsByClassName("ttt");
document.addEventListener("DOMContentLoaded",function(){
  for(let i= 0; i<init.length; i++) {
    let txt = document.createTextNode(`${init[i][0]}`);
    where[i].appendChild(txt);
  }

})

// let llink = document.querySelectorAll('.display-2.text-center');
