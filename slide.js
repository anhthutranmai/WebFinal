
var storedNames = JSON.parse(localStorage.getItem("array"));

let pull = document.querySelector("#pull");

pull.addEventListener("click",function (e) {
  e.preventDefault();

  let slide = document.querySelector("#slideshow");
  let quiz = `<div class="row pollin" style="position:relative;left:30px;padding:10px">${storedNames[0]}</div>`;

  slide.append(quiz);

})
