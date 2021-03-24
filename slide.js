let storedArr = JSON.parse(localStorage.getItem("array"));
let pull = document.querySelector("#pull");
let slide = document.querySelector("#slideshow");

document.addEventListener("DOMContentLoaded",function(){
  // e.preventDefault();
  console.log("laod");
  console.log(storedArr);
  for (var i = 0; i < storedArr.length; i++) {
    let quiz = document.createElement("div");
    quiz.classList.add("row");
    quiz.classList.add("shadow-sm");
    quiz.classList.add("ml-50");
    quiz.classList.add("mr-50");
    quiz.classList.add("py-2");
    quiz.classList.add("px-1");
    quiz.classList.add("position-relative");
    quiz.classList.add("d-flex");
    slide.appendChild(quiz);
    // g.setAttribute("id", "Div1"); to add id

    let dw = document.createElement("a");
    dw.setAttribute("role","button");
    dw.classList.add("btn");
    dw.classList.add("btn-outline-primary");
    let dwicon = document.createElement("i");
    dwicon.classList.add("fas");
    dwicon.classList.add("fa-level-down-alt");
    dw.appendChild(dwicon);
    quiz.appendChild(dw);

    let up = document.createElement("a");
    up.setAttribute("role","button");
    up.classList.add("btn");
    up.classList.add("btn-outine-warning");
    let upicon = document.createElement("i");
    upicon.classList.add("fas");
    upicon.classList.add("fa-level-up-alt");
    up.appendChild(upicon);
    quiz.appendChild(up);

    let txt = document.createElement("div");
    txt.classList.add("flex-grow-1");
    quiz.appendChild(txt);

    let q = document.createElement("p");
    // q.classList.add("justify-content-end");
    q.classList.add("text-center");
    let content = document.createTextNode(`${storedArr[i]}`);
    q.appendChild(content);
    txt.appendChild(q);
  }

  //fetch comment from jsonplaceholder
  cmtAppear();
})
let cmt = document.querySelector("#comment");

function cmtAppear(){
  let imgdiv = document.createElement("div");
  imgdiv.classList.add("col-4");
  imgdiv.classList.add("d-flex");
  imgdiv.classList.add("flex-sm-shrink-0");
  cmt.appendChild(imgdiv);

  let cmtdiv = document.createElement("div");
  cmtdiv.classList.add("col-8");
  cmt.appendChild(cmtdiv);

  getUser(imgdiv);
  getComment(cmtdiv);

}
function getUser(imgdiv){
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://randomuser.me/api",true);
  xhr.onload = function() {
    if(this.status == 200) {
        let res = JSON.parse(this.responseText);
        console.log(res.results[0].picture.thumbnail);

        // let imgdiv = document.createElement("div");
        // imgdiv.classList.add("w-25");
        // imgdiv.classList.add("d-flex");
        // imgdiv.classList.add("inline-block");
        // cmt.appendChild(imgdiv);

        let ava = document.createElement("img");
        ava.classList.add("rounded-circle");
        ava.setAttribute("src",`${res.results[0].picture.thumbnail}`);
        imgdiv.appendChild(ava);

        let name = document.createElement("h5");
        name.classList.add("font-weight-bold");
        // name.classList.add("flex-shrink-0");
        let n = document.createTextNode(`${res.results[0].name.first} ${res.results[0].name.last}`);
        name.appendChild(n);
        imgdiv.appendChild(name);
      }
  }
  xhr.send();
}

function getComment(cmtdiv){
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://jsonplaceholder.typicode.com/comments",true);
  xhr.onload = function() {
    if(this.status == 200){
      let res = JSON.parse(this.responseText);
      let pos = Math.floor((Math.random() * res.length) + 1);
      console.log(res[pos].body);

      let line = document.createElement("p");
      let text = document.createTextNode(`${res[pos].body}`);
      line.appendChild(text);
      cmtdiv.appendChild(line);
    }
  }
  xhr.send();
}
