import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useContexto } from '../contexto/indes';
import { borrarConLista, llamarLista } from '../slicers/sliceLista';
import { Formulario2 } from './Formulario2';
import { Loading } from './Loading';
import { Menu } from './Menu';

export function Lista() {
    const { per } = useContexto();
    const lis = useSelector(state => state.lista);
    const dispatch = useDispatch();
    let num = 1;
    localStorage.ir="/lista";
    document.title = "lista compras";
    React.useEffect(
        () => {
            dispatch(llamarLista());
        }
        , []);
    if (per) {
        return (
            <div className="contenedor lista">
                <Menu />
                {lis.loading ? <Loading /> : (
                    <>
                        <Formulario2 />
                        <Total datos={lis.data} />
                        <div className="cuadro">
                            {lis.data.map(ele =>
                            (<Caja
                                key={ele._id}
                                num={num++}
                                nombre={ele.nombre}
                                precio={ele.precio}
                                cantidad={ele.cantidad}
                                id={ele._id}
                            />)
                            )}
                        </div>
                    </>
                )}
            </div>
        );
    } else {
        return <Navigate to="/login" />
    }
}

function Caja(props) {
    const dispatch = useDispatch();
    const borrar=()=>{
        dispatch(borrarConLista({accion:props.id}));
    }
    const color = {background:"#f79696"}
    return (
        <div className="caja" style={props.num%2===0?color:null}>
            <div className="filad num">
                <p>{props.num}</p>
            </div>
            <div className="filad prod">
                <p>{props.nombre}</p>
            </div>
            <div className="filad cant">
                <p>${props.precio}</p>
            </div>
            <div className="filad con">
                <p className='texto'>{props.cantidad}</p>
                <span onClick={borrar}>X</span>
            </div>
        </div>
    );
}

function Total({ datos }) {
    const sumar = () => {
        const elementos = datos.map(ele =>
            ele.precio
        );
        let a = 0;
        elementos.forEach(ele=>{
            a+=ele;
        });
        return "$"+a;
    }
    sumar();
    return (
        <div className="total">
            <p className="texto">Precio total: {sumar()}</p>
        </div>
    );
}