
window.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("button");
  const input = document.getElementById("nombre");
  const respuesta = document.getElementById("respuesta");

  boton.addEventListener("click", async () => {
    const nombre = input.value;

    try {
      const res = await fetch(`/saludo/${encodeURIComponent(nombre)}`);
      const texto = await res.text();
      respuesta.innerText = texto;
      respuesta.style.display = "flex";
      setTimeout(() => {
        respuesta.style.opacity = "1";
        respuesta.style.transform = "scale(1)";
      }, 50);
    }catch{
      console.error(error);
    }
  });
});

  