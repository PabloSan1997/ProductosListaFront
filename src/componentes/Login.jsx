import React from 'react';

import { Navigate } from 'react-router-dom';
import { useContexto } from '../contexto/indes';

import "../estilos/login.css";


export function Login() {

    document.title = "Login";
    const [escribir, setEscribir] = React.useState("");
    const [escribir2, setEscribir2] = React.useState("");
    const {setSolicitud, per } = useContexto();
    if(!localStorage.ir){
        localStorage.ir="/conteo";
    }
    const evento = (e) => {
        setSolicitud({
            usuario: escribir,
            contra: escribir2
        });
        e.preventDefault();
    }
    return (
        <>
            {per ? <Navigate to={localStorage.ir} /> : (
                <div className="contenedor login">
                    <form className="caja" onSubmit={evento}>
                        <h2>Entrar</h2>
                        <div className="fila">
                            <label className="label">Usuario</label>
                            <input type="text" onChange={(e) => setEscribir(e.target.value)} />
                        </div>
                        <div className="fila">
                            <label className="label">Contraseña</label>
                            <input type="password" onChange={(e) => setEscribir2(e.target.value)} />
                        </div>
                        <div className="areaboton">
                            <button type="submit" className='boton'>Entrar</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}


