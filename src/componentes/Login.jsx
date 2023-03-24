import React from 'react';
import "../estilos/login.css";
export function Login() {
    const evento = (e) => {
        e.preventDefault();

    }
    return (
        <div className="contenedor login">
            <form className="caja" onSubmit={evento}>
                <h2>Entrar</h2>
                <div className="fila">
                        <label className="label">Usuario</label>
                        <input type="text" />
                    </div>
                    <div className="fila">
                        <label className="label">Contraseña</label>
                        <input type="password"/>
                    </div>
                <div className="areaboton">
                    <button type="submit" className='boton'>Entrar</button>
                </div>
            </form>
        </div>
    );
}