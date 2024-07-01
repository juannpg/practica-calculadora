const themeBtn = document.getElementById("themeBtn");
var i = 0;

const calculadora = document.getElementById("calculadora");
const body = document.getElementById("body");
const buttons = document.querySelectorAll(".boton");

themeBtn.addEventListener("click", cambioTema)

function cambioTema() {
  if (i === 0) {
    //modo claro
    body.style.backgroundColor = "rgb(253, 253, 242)";
    calculadora.style.backgroundColor = "#fff3e8";
    buttons.forEach((button) => {
      button.style.backgroundColor = "#f7e5c5";
      button.style.color = "rgb(161, 161, 161)";
    themeBtn.style.backgroundColor = "#535353";

    themeBtn.innerHTML = "";
    themeBtn.innerHTML = "☾";
    i++;
    })
  } else {
    //modo oscuro
    body.style.backgroundColor ="rgba(18,18,18,255)";
    calculadora.style.backgroundColor ="#2e2e2e";
    buttons.forEach((button) => {
      button.style.backgroundColor = "#535353";
      button.style.color = "rgb(161, 161, 161)";
    themeBtn.style.backgroundColor = "#f7e5c5";

    themeBtn.innerHTML = "";
    themeBtn.innerHTML = "☼";
    i = 0;
    })
  }
}