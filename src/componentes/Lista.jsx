import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContexto } from '../contexto/indes';
import { Menu } from './Menu';

export function Lista(){
    const {per}=useContexto();
    document.title="lista compras";
    if(per){
        return (
            <div className="contenedor lista">
                <Menu/>
            </div>
        );
       }else{
        return <Navigate to="/login"/>
       }
}