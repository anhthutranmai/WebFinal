let init = [
  {
    'quiz' : "a or b ?",
    'option1' : 'a',
    'option2' : 'b'
  },
  {
    'quiz' : 'c, d?',
    'option1' : 'c',
    'option2' : 'd'
  },
  {
    'quiz':'e, f?',
    'option1':'e',
    'option2':'f'
  }
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
  var selLink = document.getElementsByClassName("ttt");
  console.log(selLink.innerHTML);
  selLink.addEventListener("click",function(){
    for(let i = 0; i < init.length ; i++) {
      //if(`${init[i].quiz}` == selLink.innerHTML){
          localStorage.setItem("array",JSON.stringify(init[i]));
      //}
    }
  })

}


// exec();
let where = document.getElementsByClassName("ttt");
document.addEventListener("DOMContentLoaded",function(){
  for(let i=0; i<init.length; i++) {
    let txt = document.createTextNode(`${init[i].quiz}`);
    where[i].appendChild(txt);
  }
  exec();
})

// let llink = document.querySelectorAll('.display-2.text-center');
