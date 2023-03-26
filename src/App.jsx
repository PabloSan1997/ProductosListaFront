import React from 'react'
import { HashRouter, Navigate, Route, Routes} from 'react-router-dom'
import './estilos/App.css'
import { Header } from './componentes/Header'
import { Login } from './componentes/Login'
import { Conteo } from './componentes/Conteo'
import { NotFound } from './componentes/NotFound'
import { Lista } from './componentes/Lista'


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Agregar><Login/></Agregar>}/>
        <Route path='/conteo' element={<Agregar><Conteo /></Agregar>}/>
        <Route path='/lista' element={<Agregar><Lista /></Agregar>}/>
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </HashRouter>
  )
}
function Agregar({children}){
  return (
    <>
      <Header/>
      {children}
    </>
  );
}
export default App
