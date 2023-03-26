import React from 'react';

import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import "../estilos/login.css";
import { permisoAPi } from '../slicers/slicerPermiso';


export function Login({ entrar }) {
    const dispatch = useDispatch();
    const [escribir, setEscribir] = React.useState();
    const [escribir2, setEscribir2] = React.useState();
    const evento = () => {
        dispatch(permisoAPi({
            "usuario": escribir,
            "contra": escribir2
        }));
    }
    return (
        <>
            {entrar ? <Navigate to="/conteo" /> : (
                <div className="contenedor login">
                    <form className="caja" onSubmit={(e)=>e.preventDefault()}>
                        <h2>Entrar</h2>
                        <div className="fila">
                            <label className="label">Usuario</label>
                            <input type="text" onChange={(e)=>setEscribir(e.target.value)}/>
                        </div>
                        <div className="fila">
                            <label className="label">Contraseña</label>
                            <input type="password" onChange={(e)=>setEscribir2(e.target.value)}/>
                        </div>
                        <div className="areaboton">
                            <button type="button" className='boton' onClick={evento}>Entrar</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}


