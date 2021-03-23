let storedArr = JSON.parse(localStorage.getItem("array"));
let pull = document.querySelector("#pull");
let slide = document.querySelector("#slideshow");

document.addEventListener("DOMContentLoaded",function(){
  // e.preventDefault();
  console.log("laod");
  console.log(storedArr);
  for (var i = 0; i < storedArr.length; i++) {
    // let quiz = `
    // <div class="row shadow-sm ml-50 mr-50 p-10 position-relative">
    //   <a class="btn btn-outline-danger"><i class="fas fa-level-up-alt"></i></a>
    //   <a class="btn btn-outline-primary"><i class="fas fa-level-down-alt"></i></a>
    //   <div class="justify-content-end">
    //     ${storedArr[i]}
    //   </div>
    // </div>`;
    // console.log(storedArr[i]);
    // slide.innerHTML = quiz;

    let quiz = document.createElement("div");
    quiz.classList.add("row");
    quiz.classList.add("shadow-sm");
    quiz.classList.add("ml-50");
    quiz.classList.add("mr-50");
    quiz.classList.add("p-10");
    quiz.classList.add("position-relative");
    slide.appendChild(quiz);
    // g.setAttribute("id", "Div1"); to add id
    let up = document.createElement("a");
    up.classList.add("btn");
    up.classList.add("btn-outine-danger");
    let upicon = document.createElement("i");
    upicon.classList.add("fas");
    upicon.classList.add("fa-level-up-alt");
    up.appendChild(upicon);
    quiz.appendChild(up);

    let dw = document.createElement("a");
    dw.classList.add("btn");
    dw.classList.add("btn-outline-primary");
    let dwicon = document.createElement("i");
    dwicon.classList.add("fas");
    dwicon.classList.add("fa-level-down-alt");
    dw.appendChild(dwicon);
    quiz.appendChild(dw);

    let q = document.createElement("div");
    q.classList.add("justify-content-end");
    let content = document.createTextNode(`${storedArr[i]}`);
    q.appendChild(content);
    quiz.appendChild(q);
  }
  })
    // storedArr.forEach(function(i){
    //     let quiz = `
    //     <div class="row shadow-sm ml-50 mr-50 p-10 position-relative">
    //       <a class="btn btn-outline-danger"><i class="fas fa-level-up-alt"></i></a>
    //       <a class="btn btn-outline-primary"><i class="fas fa-level-down-alt"></i></a>
    //       <div class="justify-content-end">
    //         ${storedArr[i]}
    //       </div>
    //     </div>`;
    //     console.log(storedArr[i]);
    //     slide.innerHTML = quiz;
    // });
