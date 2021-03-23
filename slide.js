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

    let q = document.createElement("p");
    // q.classList.add("justify-content-end");
    q.classList.add("text-center");
    let content = document.createTextNode(`${storedArr[i]}`);
    q.appendChild(content);
    quiz.appendChild(q);
  }

  //fetch comment from jsonplaceholder
  getUser();
  getComment();
})
let cmt = document.querySelector("#comment");

function getUser(){
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://randomuser.me/api",true);
  xhr.onload = function() {
    if(this.status == 200) {
        let res = JSON.parse(this.responseText);
        console.log(res.results[0].picture.thumbnail);
        let ava = document.createElement("img");
        ava.classList.add("round-circle");
        ava.setAttribute("src",`${res.results[0].picture.thumbnail}`);
        cmt.appendChild(ava);

        let name = document.createElement("h5");
        name.classList.add("font-weight-bold");
        let n = document.createTextNode(`${res.results[0].name.first} ${res.results[0].name.last}`);
        name.appendChild(n);
        cmt.appendChild(name);

        // for (var i = 0; i < 3; i++) {
        //   console.log(res[i]);
        //   let newcmt = document.createElement("div");
        //   let user = document.createElement("a");
        //   let username = document.createTextNode(`${res[i].name}`);
        //   user.appendChild(username);
        //   cmt.appendChild(user);
        //
        //   let line = document.createElement("p");
        //   let text = document.createTextNode(`${res[i].body}`);
        //   line.appendChild(text);
        //   cmt.appendChild(line);
        // }
      
      }
  }
  xhr.send();


}

function getComment(){
  let xhr = new XMLHttpRequest();
  xhr.open("GET","https://jsonplaceholder.typicode.com/comments",true);
  xhr.onload = function() {
    let res = JSON.parse(this.responseText);
    console.log(res[0]);
    let line = document.createElement("p");
    let text = document.createTextNode(`${res[0].body}`);
    line.appendChild(text);
    cmt.appendChild(line);
  }

  xhr.send();
}
  // let xhr = new XMLHttpRequest();
  // xhr.open("GET","http://jsonplaceholder.typicode.com/comments",true);
  // xhr.onload = function() {
  //   if(this.status == 200) {
  //       let res = JSON.parse(this.responseText);
  //       for (var i = 0; i < 3; i++) {
  //         console.log(res[i]);
  //         let newcmt = document.createElement("div");
  //         newcmt.classList.add("row");
  //         let user = document.createElement("a");
  //         let username = document.createTextNode(`${res[i].name}`);
  //         user.appendChild(username);
  //         cmt.appendChild(user);
  //
  //         let line = document.createElement("p");
  //         let text = document.createTextNode(`${res[i].body}`);
  //         line.appendChild(text);
  //         cmt.appendChild(line);
  //       }
  //     }
  // }
  // xhr.send();
