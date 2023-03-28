import axios from "axios";

export async function mandarLista(objeto) {
  try {
    const mandar = await axios.post("https://mylista.onrender.com/api/v1/lista/", objeto);
    window.location.reload();
  } catch (error) {
    console.log(error);
    alert("Error al agregar informacion")
  }
}
