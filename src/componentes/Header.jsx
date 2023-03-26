
import React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

import "../estilos/header.css";
export function Header({entrar}) {
const [cookie, setCookie]=useCookies(["hola"]);
    const salir = ()=>{
        setCookie("hola", "no", {
            maxAge:10
        });
        window.location.reload();
    }
    return (
        <header className="titulo">
            <h1>Lista Producto</h1>
            <Link to="/login" className='salir' onClick={salir}>{!!entrar && "Logout"}</Link>
        </header>
    );
}