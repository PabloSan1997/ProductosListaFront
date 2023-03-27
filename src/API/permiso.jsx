import axios from 'axios';
import React from 'react';
import { useCookies } from 'react-cookie';

export function usePermiso1(){
    const [solicitud, setSolicitud] = React.useState({
        usuario:"",
        contra:""
    });
    const [cookie, setCookie]=useCookies(["ver"]);
    React.useEffect(()=>{
        if(!!solicitud.contra && !!solicitud.usuario){
            (async()=>{
                try {
                    const mandar = await axios.post("https://mylista.onrender.com/api/v1/usuario", solicitud);
                    const info = await mandar.data;
                    if(!info.message){
                        throw "no hay mensaje";
                    }
                    setCookie("ver", info.message, {maxAge:10000});
                    window.location.reload();
                } catch (error) {
                    alert("Usuario o contraseña incorrectas");
                }
            })();
        }
    } ,[solicitud.contra, solicitud.usuario]);
    return {setSolicitud}
}
