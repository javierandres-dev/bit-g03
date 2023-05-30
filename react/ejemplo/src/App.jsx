import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navegacion } from './components/Navegacion';
import { PaginaInicio } from './components/PaginaInicio';
import { PaginaServicios } from './components/PaginaServicios';
import { PaginaProductos } from './components/PaginaProductos';
import { PaginaAcercaDe } from './components/PaginaAcercaDe';
import { PaginaContacto } from './components/PaginaContacto';
import { PaginaNoEncontrada } from './components/PaginaNoEncontrada';
import { PaginaRegistro } from './components/PaginaRegistro';

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path='/' element={<PaginaInicio />} />
        <Route path='/servicios' element={<PaginaServicios />} />
        <Route path='/productos' element={<PaginaProductos />} />
        <Route path='/acerca-de' element={<PaginaAcercaDe />} />
        <Route path='/contacto' element={<PaginaContacto />} />
        <Route path='/registro' element={<PaginaRegistro />} />
        <Route path='*' element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
