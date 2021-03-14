let more = document.querySelector(".btn.btn-outline-primary");

more.addEventListener("click",function(e) {
  e.preventDefault();

  let newinput = document.createElement("form-group");

  newinput.innerHTML = '<label for="formGroupExampleInput">Option </label><input type="text" class="form-control" id="formGroupExampleInput" placeholder="Another input">';

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
