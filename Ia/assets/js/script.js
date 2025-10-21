// Selecciona el botón y agrega un evento al hacer clic
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("cambiarColor");
  const colores = ["#f5f0e1", "#f0dfc3", "#e6c79c", "#f3e1b6"];
  let indice = 0;

  boton.addEventListener("click", () => {
    indice = (indice + 1) % colores.length;
    document.body.style.backgroundColor = colores[indice];
  });
});
