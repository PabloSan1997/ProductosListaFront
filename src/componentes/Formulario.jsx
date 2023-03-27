import React from 'react';
import { useDispatch } from 'react-redux';
import { mira } from '../slicers/slicerConteo';


export function Formulario(){
    const dispatch = useDispatch();
    const [escribir, setEscribir]=React.useState({nombre:"",cuantos:"",tomar:""});
    const evento = (e)=>{
        e.preventDefault();
        dispatch(mira(escribir));
    }
    const escribir1 = (e)=>{
        setEscribir({...escribir, nombre:e.target.value});
    }
    const escribir2 = (e)=>{
        setEscribir({...escribir, cuantos:Number(e.target.value)});
    }
    const escribir3 = (e)=>{
        setEscribir({...escribir, tomar:Number(e.target.value)});
    }
    return(
        <form className="formulario" onSubmit={evento}>
            <div className="areatitulo">
                <h2>Agregar producto</h2>
            </div>
            <div className="fila">
                <label className="label">Nombre</label>
                <input type="text" className="entrada" placeholder='Escribir' onChange={escribir1}/>
            </div>
            <div className="fila">
                <label className="label">Cantidad</label>
                <input type="text" className="entrada" placeholder='Escribir' onChange={escribir2}/>
            </div>
            <div className="fila">
                <label className="label">Consumo</label>
                <input type="text" className="entrada" placeholder='Escribir' onChange={escribir3}/>
            </div>
            <div className="areaboton">
                <button className="boton">Agregar</button>
            </div>
        </form>
    );
}