let more = document.querySelector("#more");
let submit = document.querySelector(".btn.btn-success");
var i = 1;

let array = [];
more.addEventListener("click",function(e) {
  e.preventDefault();

  let newinput = document.createElement("form-group");
  i += 1;
  newinput.innerHTML = "<label for='formGroupExampleInput" + i + "'>Option "+ i +"</label><input type='text' class='form-control' id='formGroupExampleInput" + i +"'>";
  console.log("now u have "+ i +" option");
  let where = document.querySelector("form");
  where.append(newinput);

})
//collect input's value, push into array
//array[0] is the poll's question
submit.addEventListener("click",function(e){
  e.preventDefault();
  window.location.href="slideshow.html";
  for (var j = 0; j <= i; j++) {
    array.push(document.querySelector("#formGroupExampleInput" + j).value);
  }
  localStorage.setItem("array",JSON.stringify(array));
})




//basic ultilities may be needed
function fadeIn(el){
  el.style.display="initial";
  setTimeout(function () {
    el.style.opacity ="1";
  },10)
}

function fadeOut(el){
  el.style.opacity ="0";
  setTimeout(function () {
    el.style.display="none";
  },10)
}
