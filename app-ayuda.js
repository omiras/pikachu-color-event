//1. Asociamos el evento click a #colors. Mediante la propagación de eventos, podremos detectar cual han clicado

let buttons = document.querySelector("#colors");
buttons.addEventListener("click", function (event) {
  console.log("el color pulsado es el color: " + event.target.id);

  // Debes asignar el color event.target.id como el color de fondo del pikachu
});
