import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContexto } from '../contexto/indes';

export function Lista(){
    const {per}=useContexto();
    if(per){
        return (
            <div className="contenedor conteo">
                Lista
            </div>
        );
       }else{
        return <Navigate to="/login"/>
       }
}