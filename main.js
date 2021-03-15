let more = document.querySelector(".btn.btn-outline-primary");
var i = 1;
more.addEventListener("click",function(e) {
  e.preventDefault();

  let newinput = document.createElement("form-group");
  i += 1;
  newinput.innerHTML = "<label for='formGroupExampleInput" + i + "'>Option "+ i +"</label><input type='text' class='form-control' id='formGroupExampleInput" + i +"' placeholder='Another input'>";
  console.log("now u have "+ i +" option");
  let where = document.querySelector("form");
  where.append(newinput);

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
