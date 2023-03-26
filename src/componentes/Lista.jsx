import React from 'react';
import { Navigate } from 'react-router-dom';

export function Lista({entrar}){
    if(entrar){
        return (
            <div className="contenedor conteo">
                Lista
            </div>
        );
       }else{
        return <Navigate to="/login"/>
       }
}