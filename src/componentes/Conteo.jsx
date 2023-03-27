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
    document.title="Conteo";
    React.useEffect(
        () => {
            distpatch(llamarConteo());
        }
        , []);
    if (per) {
        return (
            <div className="contenedor conteo">
                <Menu />
                <Formulario />
                {info.loading ? <Loading /> :
                    (<div className="cuadro">
                        {info.data.map(ele =>
                        (
                            <Caja key={ele._id} id={ele._id} nombre={ele.nombre} cuantos={ele.cuantos} tomar={ele.tomar} num={i++} />
                        )
                        )}
                    </div>)
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
        <div className="fila">
            <span className="cerrar" onClick={borrar}>X</span>
            <span className="num">{props.num}</span>
            <p className="nombre">{props.nombre}</p>
            <p className="cuantos">{props.cuantos}</p>
            <p className="tomar">{props.tomar}</p>
        </div>
    );
}