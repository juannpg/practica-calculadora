// Obtengo el contenedor de botones
const contenedorBotones = document.getElementById("botones");

// compruebo los clicks en todo el div
contenedorBotones.addEventListener("click", function (event) {
  //compruebo si el target es un boton
  if (event.target.tagName === "BUTTON") {
    // si es AC borra todo
    if (event.target.id === "AC") {
      document.getElementById("textoOutput").innerHTML = "";
    } else {
    if (event.target.id === "temaClaro" || event.target.id === "temaOscuro") {
      document.getElementById("textoOutput").innerHTML += "";
    } else {
      // Si es = muestra el resultado
      if (event.target.id === "=") {
        realizarOperacion();
      } else {
        // else, escribe el input
        document.getElementById("textoOutput").innerHTML += event.target.innerText;
      }
    }
  }
}});

function realizarOperacion() {
  //obtengo las variables
  const operacion = document.getElementById("textoOutput").innerText;
  const resultado = eval(operacion);

  //muestro el resultado
  document.getElementById("textoOutput").innerHTML = "";
  document.getElementById("textoOutput").innerHTML = resultado;

  // si es 69 o 69420, muestra un mensaje y se va en 3 segundos
  if (resultado === 69 || resultado === 69420) {
    document.getElementById("textoOutput").innerHTML = "pillado pajerjo jijijiji.";
    eliminarPillado();
  }

  function eliminarPillado() {
    setTimeout(() => {
      document.getElementById("textoOutput").innerHTML = "";
    }, 3000);
  }
}