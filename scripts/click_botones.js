// Get the container of the buttons
var contenedorBotones = document.getElementById("botones");

// Listen for click events on the buttons
contenedorBotones.addEventListener("click", function (event) {
  // Check if the target is a button
  if (event.target.tagName === "BUTTON") {
    // If the button is AC, clear the output
    if (event.target.id === "AC") {
      document.getElementById("textoOutput").innerHTML = "";
    } else {
      // If the button is =, perform the operation
      if (event.target.id === "=") {
        realizarOperacion();
      } else {
        // Otherwise, add the button's text to the output
        document.getElementById("textoOutput").innerHTML += event.target.innerText;
      }
    }
  }
});

// Function to perform the operation
function realizarOperacion() {
  // Get the text from the output
  var operacion = document.getElementById("textoOutput").innerText;
  // Perform the operation
  var resultado = eval(operacion);
  // Clear the output
  document.getElementById("textoOutput").innerHTML = "";
  // Show the result in the output
  document.getElementById("textoOutput").innerHTML = resultado;

  // Function to clear the output after 3 seconds
  function eliminarPillado() {
    setTimeout(() => {
      document.getElementById("textoOutput").innerHTML = "";
    }, 3000);
  }

  // If the result is 69 or 69420, say it was taken and clear the output after 3 seconds
  if (resultado === 69 || resultado === 69420) {
    document.getElementById("textoOutput").innerHTML = "pillado pajerjo jijijiji.";
    eliminarPillado();
  }
}