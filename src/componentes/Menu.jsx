import React from 'react';
import { NavLink } from 'react-router-dom';

export function Menu() {
    return (
        <nav className="menu">
            <NavLink to="/conteo" className={({ isActive }) => isActive ? "sec rojo" : "sec"}>Conteo</NavLink>
            <NavLink to="/lista" className={({ isActive }) => isActive ? "sec rojo" : "sec"}>Lista Compra</NavLink>
        </nav>
    );
}