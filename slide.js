// import data from './data.json';
// const data = require('./data.json');
var storedArr = JSON.parse(localStorage.getItem("array"));

let pull = document.querySelector("#pull");
let slide = document.querySelector("#slideshow");

pull.addEventListener("click",function(e) {
  e.preventDefault();
  console.log(storedArr);
  // for (var i = 0; i < storedArr.length; i++) {
  //   let quiz = `<div class="row pollin" style="position:relative;left:30px;padding:10px">${storedArr[i]}</div>`;
  //   slide.innerHTML = quiz;
  // }
  storedArr.forEach(function(i){
      let quiz = `
      <div class="row shadow-sm ml-50 mr-50 p-10 position-relative">
        <a class="btn btn-outline-danger"><i class="fas fa-level-up-alt"></i></a>
        <a class="btn btn-outline-primary"><i class="fas fa-level-down-alt"></i></a>
        <div class="justify-content-end">
          ${storedArr[i]}
        </div>
      </div>`;
      slide.innerHTML = quiz;
  });



  // slide.innerHTML = JSON.stringify(data);

  // console.log(data);
  // getUser();

})

// function getUser(){
//   var xmlhttp = new XMLHttpRequest();
//   var url = "data.json";
//   xmlhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//           var myArr = JSON.parse(this.responseText);
//           myFunction(myArr);
//       }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
//   function myFunction(arr)
//   {
//      console.log(arr);
//   }
// }
