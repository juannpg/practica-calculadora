const buttonContainer = document.getElementById("buttonContainer");
const output = document.getElementById("output");

buttonContainer.addEventListener("click", function (event) {
  //si el target es un boton
  if (event.target.tagName === "BUTTON") {
    if (event.target.id === "AC") {
      output.innerHTML = "";
    } else {
    if (event.target.id === "toggleBtn" || event.target.id === "prueba") {
      output.innerHTML += "";
    } else {
      if (event.target.id === "=") {
        operate();
      } else {
        output.innerHTML += event.target.innerText;
      }
    }
  }
}});

function operate() {
  const operacion = output.innerText;
  const resultado = eval(operacion);

  output.innerHTML = "";
  output.innerHTML = resultado;

  if (resultado === 69 || resultado === 69420) {
    output.innerHTML = "pillado pajerjo jijijiji.";
    setTimeout(() => {
      output.innerHTML = "";
    }, 3000);
  }
}