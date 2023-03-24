import React from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './estilos/App.css'
import { Header } from './componentes/Header'
import { Login } from './componentes/Login'

function App() {

  return (
    <HashRouter>
      <Header/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/conteo' element={<p>conteo</p>}/>
        <Route path='/lista' element={<p>lista</p>}/>
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path='*' element={<p>Not found</p>}/>
      </Routes>
    </HashRouter>
  )
}

export default App
