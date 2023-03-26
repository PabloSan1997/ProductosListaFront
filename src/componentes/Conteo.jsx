import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContexto } from '../contexto/indes';

export function Conteo(){
    const {per}=useContexto();
   if(per){
    return (
        <div className="contenedor conteo">
            Conteo
        </div>
    );
   }else{
    return <Navigate to="/login"/>
   }
}