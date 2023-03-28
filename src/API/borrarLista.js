import axios from "axios";


export async function borrarLista(ver){
    try {
        const mandar = await axios.delete(`https://mylista.onrender.com/api/v1/lista/${ver}`);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}