const toggle = document.getElementById("toggle");
var i = 1;

const main = document.getElementById("main");
const body = document.getElementById("body");
const buttons = document.querySelectorAll(".boton");

toggle.addEventListener("click", cambioTema)

function cambioTema() {
  if (i === 0) {
    //activar modo claro
    body.classList.remove('oscuro');
    body.classList.add('claro');
    main.classList.remove('oscuro');
    main.classList.add('claro');
    buttons.forEach((button) => {
      button.classList.remove('oscuro');
      button.classList.add('claro');
    })
    i++;
  } else if (i === 1){
    //activar modo oscuro
    body.classList.remove('claro');
    body.classList.add('oscuro');
    main.classList.remove('claro');
    main.classList.add('oscuro');
    buttons.forEach((button) => {
      button.classList.remove('claro');
      button.classList.add('oscuro');
    })
    i--;
  }
}