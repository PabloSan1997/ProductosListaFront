import React from 'react'
import { HashRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import './estilos/App.css'
import { Header } from './componentes/Header'
import { Login } from './componentes/Login'
import { Conteo } from './componentes/Conteo'
import { NotFound } from './componentes/NotFound'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Agregar><Login/></Agregar>}/>
        <Route path='/conteo' element={<Agregar><Conteo/></Agregar>}/>
        <Route path='/lista' element={<p>lista</p>}/>
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
