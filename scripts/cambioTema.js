const themeBtn = document.getElementById("themeBtn");
var i = 0;

const main = document.getElementById("main");
const body = document.getElementById("body");
const buttons = document.querySelectorAll("button");

themeBtn.addEventListener("click", cambioTema)

function cambioTema() {
  if (i === 0) {
    //activar modo claro
    body.style.backgroundColor = "rgb(253, 253, 242)";
    main.style.backgroundColor = "#fff3e8";
    buttons.forEach((button) => {
      button.style.backgroundColor = "#f7e5c5";
      button.style.color = "rgb(161, 161, 161)";
    //se pone del color oscuro
    themeBtn.style.backgroundColor = "#535353";

    themeBtn.innerHTML = "";
    themeBtn.innerHTML = "☾";
    })
    i++;
  } else if (i === 1){
    //activar modo oscuro
    body.style.backgroundColor ="rgba(18,18,18,255)";
    main.style.backgroundColor ="#2e2e2e";
    buttons.forEach((button) => {
      button.style.backgroundColor = "#535353";
      button.style.color = "rgb(161, 161, 161)";
    themeBtn.style.backgroundColor = "#f7e5c5";

    themeBtn.innerHTML = "";
    themeBtn.innerHTML = "☼";
    })
    i--;
  }
}