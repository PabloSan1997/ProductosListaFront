import React from 'react';
import "../estilos/notfound.css";
import logo from "../../asserts/logo.svg";
export function NotFound() {
    document.title="Not found";
    return (
        <div className="jaja">
            <p className="noEncontar">Not found 404</p>
            <img src={logo} alt="" className="errorLogo" />
        </div>

    );
}