const botonTema = document.getElementById("botonTema");
var i = 0;

const calculadora = document.getElementById("calculadora");
const body = document.getElementById("body");
const buttons = document.querySelectorAll("button");

botonTema.addEventListener("click", cambioTema)

function cambioTema() {
  if (i === 0) {
    //modo claro
    body.style.backgroundColor = "rgb(253, 253, 242)";
    calculadora.style.backgroundColor = "#fff3e8";
    buttons.forEach((button) => {
      button.style.backgroundColor = "#f7e5c5";
      button.style.color = "rgb(161, 161, 161)";
    botonTema.style.backgroundColor = "#535353";

    botonTema.innerHTML = "";
    botonTema.innerHTML = "☾";
    i++;
    })
  } else {
    //modo oscuro
    body.style.backgroundColor ="rgba(18,18,18,255)";
    calculadora.style.backgroundColor ="#2e2e2e";
    buttons.forEach((button) => {
      button.style.backgroundColor = "#535353";
      button.style.color = "rgb(161, 161, 161)";
    botonTema.style.backgroundColor = "#f7e5c5";

    botonTema.innerHTML = "";
    botonTema.innerHTML = "☼";
    i = 0;
    })
  }
}