import axios from "axios";

export async function mandarConteo(objeto) {
  try {
    const mandar = await axios.post("https://mylista.onrender.com/api/v1/conteo/", objeto);
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
}
