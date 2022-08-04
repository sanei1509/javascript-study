const goalsButtonEl = document.querySelector(".button-goals");
const entradaEl = document.querySelector(".goal-input");
const listaEl = document.querySelector(".container-goals");

function añadirObjetivo() {
  const entrada = entradaEl.value;
  const item = document.createElement("li");
  item.textContent = entrada;
  //empujo hacia la vista el item preparado
  listaEl.appendChild(item);
  entradaEl.value = "";
}

//Generamos un evento que apunte a la funcion anterior (sin ejecutarla)
goalsButtonEl.addEventListener("click", añadirObjetivo);
