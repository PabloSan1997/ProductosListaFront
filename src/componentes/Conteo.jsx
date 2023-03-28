import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useContexto } from '../contexto/indes';
import { borrarCon, llamarConteo, mira } from '../slicers/slicerConteo';
import { Formulario } from './Formulario';
import { Loading } from './Loading';
import { Menu } from './Menu';
import "../estilos/conteo.css";


export function Conteo() {
    const { per } = useContexto();
    let i = 1;
    const distpatch = useDispatch();
    const info = useSelector(state => state.conteo);
    document.title = "Conteo";
    React.useEffect(
        () => {
            distpatch(llamarConteo());
        }
        , []);
    if (per) {
        return (
            <div className="contenedor conteo">
                <Menu />
                {info.loading ? <Loading /> :
                    (
                        <>
                            <Formulario />
                            <div className="cuadro">
                                <div className="caja cabeza">
                                    <div className="filad num">
                                        <p>Num</p>
                                    </div>
                                    <div className="filad prod">
                                        <p>Producto</p>
                                    </div>
                                    <div className="filad cant">
                                        <p>Cantidad</p>
                                    </div>
                                    <div className="filad con">
                                       <p>Consumo</p>
                                    </div>
                                </div>
                                {info.data.map(ele =>
                                (
                                    <Caja key={ele._id} id={ele._id} nombre={ele.nombre} cuantos={ele.cuantos} tomar={ele.tomar} num={i++} />
                                )
                                )}
                            </div>
                        </>
                    )
                }
            </div>
        );
    } else {
        return <Navigate to="/login" />
    }
}

function Caja(props) {
    const dispatch = useDispatch();
    const borrar = () => {
        dispatch(borrarCon({ accion: props.id }));
    }
    return (
        <div className="caja">
            <div className="filad num">
                <p>{props.num}</p>
            </div>
            <div className="filad prod">
                <p>{props.nombre}</p>
            </div>
            <div className="filad cant">
                <p>{props.cuantos}</p>
            </div>
            <div className="filad con">
                <p className='texto'>{props.tomar}</p>
                <span onClick={borrar}>X</span>
            </div>
        </div>
    );
}