
import React from 'react'
import Inicio from './pages/inicio'
import Navbar from './pages/Navbar'
import Productos from './pages/productos'
import ProductoDetalle from './pages/productoDetalle'
import Footer from './pages/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/productos/:id' element={<ProductoDetalle />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App