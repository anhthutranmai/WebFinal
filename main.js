let more = document.querySelector(".btn.btn-outline-primary");

more.addEventListener("click",function(e) {
  e.preventDefault();
  let where = document.querySelectorAll("form.form-group");
  let newinput = where.createElement("input");

  let newinput = `<div class="form-group">
    <label for="formGroupExampleInput2">Option 2</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
  </div>`
    //where.append(newinput);
  where.innerHTML = newinput;


	// var newdiv = document.createElement('div');

    // newdiv.innerHTML = document.getElementById('form:lastchild').innerHTML;

    // document.getElementById('form').append(newdiv);

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
