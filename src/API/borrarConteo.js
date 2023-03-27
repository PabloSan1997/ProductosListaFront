import axios from "axios";


export async function borrarConte(ver){
    try {
        const mandar = await axios.delete(`https://mylista.onrender.com/api/v1/conteo/${ver}`);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}