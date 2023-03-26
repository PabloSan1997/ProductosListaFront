import React from 'react';
import { Navigate } from 'react-router-dom';

export function Conteo({entrar}){
   if(entrar){
    return (
        <div className="contenedor conteo">
            Conteo
        </div>
    );
   }else{
    return <Navigate to="/login"/>
   }
}