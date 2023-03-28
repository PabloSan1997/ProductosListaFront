import React from 'react';
import { useDispatch } from 'react-redux';
import "../estilos/lista.css"
import { miraLista } from '../slicers/sliceLista';


export function Formulario2(){
    const dispatch = useDispatch();
    const [escribir, setEscribir]=React.useState({nombre:"",precio:"",cantidad:""});
    const evento = (e)=>{
        e.preventDefault();
        dispatch(miraLista(escribir));
    }
    const escribir1 = (e)=>{
        setEscribir({...escribir, nombre:e.target.value});
    }
    const escribir2 = (e)=>{
        setEscribir({...escribir, precio:Number(e.target.value)});
    }
    const escribir3 = (e)=>{
        setEscribir({...escribir, cantidad:Number(e.target.value)});
    }
    return(
        <form className="formulario" onSubmit={evento}>
            <div className="areatitulo">
                <h2>Agregar Lista Compra</h2>
            </div>
            <div className="fila">
                <label className="label">Nombre</label>
                <input type="text" className="entrada" placeholder='Escribir' onChange={escribir1}/>
            </div>
            <div className="fila">
                <label className="label">Precio</label>
                <input type="text" className="entrada" placeholder='Escribir' onChange={escribir2}/>
            </div>
            <div className="fila">
                <label className="label">Cantidad</label>
                <input type="text" className="entrada" placeholder='Escribir' onChange={escribir3}/>
            </div>
            <div className="areaboton">
                <button className="boton">Agregar</button>
            </div>
        </form>
    );
}