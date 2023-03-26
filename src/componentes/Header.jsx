
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { useContexto } from '../contexto/indes';

import "../estilos/header.css";
export function Header() {
    const [cookie, setCookie, clearCookie]=useCookies(["ver"]);
    const {per}=useContexto();
    const salir = ()=>{
        clearCookie("ver");
        window.location.reload();
    }
    return (
        <header className="titulo">
            <h1>Lista Producto</h1>
            <Link to="/login" className='salir' onClick={salir}>{ per && "Logout"}</Link>
        </header>
    );
}