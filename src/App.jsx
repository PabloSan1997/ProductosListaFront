import React from 'react'
import { HashRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import './estilos/App.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Header } from './componentes/Header'
import { Login } from './componentes/Login'
import { Conteo } from './componentes/Conteo'
import { NotFound } from './componentes/NotFound'
import { Lista } from './componentes/Lista'
import { useSelector } from 'react-redux';

function App() {
  const [entrar, setEntrar]=React.useState(false);
  const ver = useSelector(state=>state.permiso);
  const [cookie, setCookie]=useCookies(["hola"]);
  React.useEffect(()=>{
    if(!!ver[0].message){
        setCookie("hola", ver[0].message, {maxAge:1000*60});
    }
    (async()=>{
        try {
            const hola = await axios.get(`http://localhost:3001/api/v1/usuario/${cookie.hola}`);
            setEntrar(await hola.data.estado);
            console.log(await hola.data.estado);
        } catch (error) {
            console.log("No iniciado");
            setEntrar(false);
        }      
    })();
},[ver]);
  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Agregar entrar={entrar}><Login entrar={entrar}/></Agregar>}/>
        <Route path='/conteo' element={<Agregar entrar={entrar}><Conteo entrar={entrar}/></Agregar>}/>
        <Route path='/lista' element={<Agregar entrar={entrar}><Lista entrar={entrar}/></Agregar>}/>
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </HashRouter>
  )
}
function Agregar({children, entrar}){
  return (
    <>
      <Header entrar={entrar}/>
      {children}
    </>
  );
}
export default App
