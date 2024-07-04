const toggleBtn = document.getElementById("toggleBtn");
let isDarkMode = false;

const main = document.getElementById("main");
const body = document.getElementById("body");
const buttons = document.querySelectorAll(".boton");

toggleBtn.addEventListener("click", cambioTema);

function cambioTema() {
  if (isDarkMode === true) {
    //activar modo claro
    body.classList.remove('oscuro');
    body.classList.add('claro');
    main.classList.remove('oscuro');
    main.classList.add('claro');
    buttons.forEach((button) => {
      if (button !== toggleBtn) {
        button.classList.remove('oscuro');
        button.classList.add('claro');
      } else if (button == toggleBtn) {
        toggleBtn.classList.remove('claro');
        toggleBtn.classList.add('oscuro');
      }
    }) 
  } else if (isDarkMode === false){
    //activar modo oscuro
    body.classList.remove('claro');
    body.classList.add('oscuro');
    main.classList.remove('claro');
    main.classList.add('oscuro');
    buttons.forEach((button) => {
      if (button !== toggleBtn) {
        button.classList.remove('claro');
        button.classList.add('oscuro');
      } else if (button == toggleBtn) {
        toggleBtn.classList.remove('oscuro');
        toggleBtn.classList.add('claro');
      }
    }) 
  }
  isDarkMode = !isDarkMode;
}