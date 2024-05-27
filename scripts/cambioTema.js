const botonClaro = document.getElementById("temaClaro");
const botonOscuro = document.getElementById("temaOscuro");
const calculadora = document.getElementById("calculadora");

botonClaro.addEventListener("click", modoClaro());
botonOscuro.addEventListener("click", modoOscuro());

function modoClaro() {
  body.style.backgroundColor = "rgb(253, 253, 242)";
  calculadora.style.backgroundColor = "#fff3e8";
  button.style.backgroundColor = "#f7e5c5";
  button.style.color = "rgb(161, 161, 161";
}

function modoOscuro() {
  body.style.backgroundColor ="rgba(18,18,18,255)";
  calculadora.style.backgroundColor ="#2e2e2e";
  button.style.backgroundColor = "#535353";
  button.style.color = "rgb(161, 161, 161)";
}