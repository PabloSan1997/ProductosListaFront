import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useContexto } from '../contexto/indes';
import { llamarConteo, mira } from '../slicers/slicerConteo';
import { Formulario } from './Formulario';

export function Conteo(){
    const {per}=useContexto();
    let i=1;
    const distpatch=useDispatch();
    const info = useSelector(state=>state.conteo);
    React.useEffect(
        ()=>{
            distpatch(llamarConteo());
        }
        ,[]);
   if(per){
    return (
        <div className="contenedor conteo">
            <Formulario/>
            <div className="cuadro">
                {info.data.map(ele=>
                    (
                    <Caja key={ele._id} id={ele._id} nombre={ele.nombre} cuantos={ele.cuantos} tomar={ele.tomar} num={i++}/>
                    )
                    )}
            </div>
        </div>
    );
   }else{
    return <Navigate to="/login"/>
   }
}

function Caja(props){
    return (
        <div className="fila">
            <span className="cerrar">X</span>
            <span className="num">{props.num}</span>
            <p className="nombre">{props.nombre}</p>
            <p className="cuantos">{props.cuantos}</p>
            <p className="tomar">{props.tomar}</p>
        </div>
    );
}