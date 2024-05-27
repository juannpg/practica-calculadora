const expInput = document.getElementById("expInput");
const expButton = document.getElementById("expButton");

expButton.addEventListener("click" , expFunction);

function expFunction() {
  expInput.style.backgroundColor = "yellow";
  alert("PENE!");
}