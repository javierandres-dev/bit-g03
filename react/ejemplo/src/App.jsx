import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navegacion } from './components/Navegacion';
import { PaginaInicio } from './components/PaginaInicio';
import { PaginaServicios } from './components/PaginaServicios';
import { PaginaProductos } from './components/PaginaProductos';
import { PaginaAcercaDe } from './components/PaginaAcercaDe';
import { PaginaContacto } from './components/PaginaContacto';
import { PaginaNoEncontrada } from './components/PaginaNoEncontrada';
import { PaginaRegistro } from './components/PaginaRegistro';
import { PaginaIniciarSesion } from './components/PaginaIniciarSesion';
import { PaginaPrivada } from './components/PaginaPrivada';

function App() {
  const [logueado, setLogueado] = useState(false);

  useEffect(() => {
    const backend = JSON.parse(localStorage.getItem('backend'));
    const token = JSON.parse(localStorage.getItem('token'));
    if (backend && token) {
      setLogueado(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navegacion logueado={logueado} setLogueado={setLogueado} />
      <Routes>
        <Route path='/' element={<PaginaInicio />} />
        <Route path='/servicios' element={<PaginaServicios />} />
        <Route path='/productos' element={<PaginaProductos />} />
        <Route path='/acerca-de' element={<PaginaAcercaDe />} />
        <Route path='/contacto' element={<PaginaContacto />} />
        <Route
          path='/registro'
          element={<PaginaRegistro setLogueado={setLogueado} />}
        />
        <Route
          path='/iniciar-sesion'
          element={<PaginaIniciarSesion setLogueado={setLogueado} />}
        />
        <Route path='/privado' element={<PaginaPrivada />} />
        <Route path='*' element={<PaginaNoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
